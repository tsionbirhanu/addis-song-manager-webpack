import { createServer, Model, Factory, Response } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      song: Model,
    },

    factories: {
      song: Factory.extend({
        title(i) {
          const titles = [
            "Bohemian Rhapsody",
            "Stairway to Heaven",
            "Hotel California",
            "Imagine",
            "Sweet Child O' Mine",
            "Billie Jean",
            "Like a Rolling Stone",
            "Smells Like Teen Spirit",
            "What's Going On",
            "Purple Haze",
            "Good Vibrations",
            "Johnny B. Goode",
            "I Want to Hold Your Hand",
            "Respect",
            "Hey Jude",
            "Born to Run",
            "Light My Fire",
            "Satisfaction",
            "What's Love Got to Do with It",
            "My Girl",
          ]
          return titles[i % titles.length]
        },
        artist(i) {
          const artists = [
            "Queen",
            "Led Zeppelin",
            "Eagles",
            "John Lennon",
            "Guns N' Roses",
            "Michael Jackson",
            "Bob Dylan",
            "Nirvana",
            "Marvin Gaye",
            "Jimi Hendrix",
            "The Beach Boys",
            "Chuck Berry",
            "The Beatles",
            "Aretha Franklin",
            "The Beatles",
            "Bruce Springsteen",
            "The Doors",
            "The Rolling Stones",
            "Tina Turner",
            "The Temptations",
          ]
          return artists[i % artists.length]
        },
        album(i) {
          const albums = [
            "A Night at the Opera",
            "Led Zeppelin IV",
            "Hotel California",
            "Imagine",
            "Appetite for Destruction",
            "Thriller",
            "Highway 61 Revisited",
            "Nevermind",
            "What's Going On",
            "Are You Experienced",
            "Pet Sounds",
            "Chuck Berry Is on Top",
            "Please Please Me",
            "I Never Loved a Man",
            "Abbey Road",
            "Born to Run",
            "The Doors",
            "Out of Our Heads",
            "Private Dancer",
            "Meet the Temptations",
          ]
          return albums[i % albums.length]
        },
        year() {
          return Math.floor(Math.random() * (2023 - 1950) + 1950)
        },
        genre(i) {
          const genres = [
            "Rock",
            "Pop",
            "Blues",
            "Jazz",
            "Hip Hop",
            "Country",
            "Electronic",
            "R&B",
            "Folk",
            "Classical",
            "Reggae",
            "Punk",
            "Metal",
            "Alternative",
          ]
          return genres[i % genres.length]
        },
        duration() {
          return Math.floor(Math.random() * 300 + 120) // 2-7 minutes in seconds
        },
      }),
    },

    seeds(server) {
      server.createList("song", 50)
    },

    routes() {
      this.namespace = "api"

      // Get paginated songs
      this.get("/songs", (schema, request) => {
        const page = Number.parseInt(request.queryParams.page) || 1
        const limit = Number.parseInt(request.queryParams.limit) || 10
        const search = request.queryParams.search || ""

        let songs = schema.songs.all().models

        // Filter by search term
        if (search) {
          songs = songs.filter(
            (song) =>
              song.title.toLowerCase().includes(search.toLowerCase()) ||
              song.artist.toLowerCase().includes(search.toLowerCase()) ||
              song.album.toLowerCase().includes(search.toLowerCase()),
          )
        }

        const total = songs.length
        const startIndex = (page - 1) * limit
        const endIndex = startIndex + limit
        const paginatedSongs = songs.slice(startIndex, endIndex)

        return {
          data: paginatedSongs,
          pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            hasNext: endIndex < total,
            hasPrev: page > 1,
          },
        }
      })

      // Get single song
      this.get("/songs/:id", (schema, request) => {
        const id = request.params.id
        const song = schema.songs.find(id)

        if (!song) {
          return new Response(404, {}, { error: "Song not found" })
        }

        return song
      })

      // Create song
      this.post("/songs", (schema, request) => {
        const attrs = JSON.parse(request.requestBody)

        // Validation
        if (!attrs.title || !attrs.artist) {
          return new Response(
            400,
            {},
            {
              error: "Title and artist are required",
            },
          )
        }

        const song = schema.songs.create(attrs)
        return song
      })

      // Update song
      this.put("/songs/:id", (schema, request) => {
        const id = request.params.id
        const attrs = JSON.parse(request.requestBody)
        const song = schema.songs.find(id)

        if (!song) {
          return new Response(404, {}, { error: "Song not found" })
        }

        song.update(attrs)
        return song
      })

      // Delete song
      this.delete("/songs/:id", (schema, request) => {
        const id = request.params.id
        const song = schema.songs.find(id)

        if (!song) {
          return new Response(404, {}, { error: "Song not found" })
        }

        song.destroy()
        return new Response(204)
      })

      // Add delay to simulate real API
      this.timing = 500
    },
  })

  return server
}
