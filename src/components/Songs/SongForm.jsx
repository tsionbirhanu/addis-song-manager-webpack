"use client"

import styled from "@emotion/styled"
import { useForm } from "react-hook-form"
import Input from "../UI/Input"
import Button from "../UI/Button"
import Card from "../UI/Card"
import React from "react"

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  
  @media (max-width: 640px) {
    gap: ${(props) => props.theme.spacing.md};
  }
`

const FormGrid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.lg};
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
  }
  
  @media (min-width: 641px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const FormActions = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  justify-content: flex-end;
  padding-top: ${(props) => props.theme.spacing.lg};
  border-top: 1px solid ${(props) => props.theme.colors.gray[200]};
  
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: ${(props) => props.theme.spacing.xs};
  }
  
  @media (max-width: 640px) {
    gap: ${(props) => props.theme.spacing.xs};
    padding-top: ${(props) => props.theme.spacing.md};
  }
`

const SongForm = ({ initialData = {}, onSubmit, onCancel, loading = false, submitText = "Save Song" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: initialData.title || "",
      artist: initialData.artist || "",
      album: initialData.album || "",
      year: initialData.year || new Date().getFullYear(),
      genre: initialData.genre || "",
      duration: initialData.duration || "",
    },
    mode: "onChange", // This enables real-time validation
  })

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data) // Debug log

    // Convert duration to seconds if it's in MM:SS format
    let duration = data.duration
    if (typeof duration === "string" && duration.includes(":")) {
      const [minutes, seconds] = duration.split(":").map(Number)
      duration = minutes * 60 + seconds
    }

    const formattedData = {
      ...data,
      year: Number.parseInt(data.year),
      duration: Number.parseInt(duration) || 0,
    }

    console.log("Formatted data:", formattedData) // Debug log
    onSubmit(formattedData)
  }

  return (
    <Card>
      <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <FormGrid>
          <Input
            id="title"
            label="Song Title"
            required
            {...register("title", {
              required: "Song title is required",
              minLength: {
                value: 1,
                message: "Title must be at least 1 character",
              },
              validate: (value) => value.trim().length > 0 || "Song title cannot be empty",
            })}
            error={errors.title?.message}
          />

          <Input
            id="artist"
            label="Artist"
            required
            {...register("artist", {
              required: "Artist is required",
              minLength: {
                value: 1,
                message: "Artist must be at least 1 character",
              },
              validate: (value) => value.trim().length > 0 || "Artist cannot be empty",
            })}
            error={errors.artist?.message}
          />

          <Input id="album" label="Album" {...register("album")} error={errors.album?.message} />

          <Input
            id="year"
            label="Year"
            type="number"
            min="1900"
            max={new Date().getFullYear() + 1}
            {...register("year", {
              required: "Year is required",
              min: {
                value: 1900,
                message: "Year must be 1900 or later",
              },
              max: {
                value: new Date().getFullYear() + 1,
                message: "Year cannot be in the future",
              },
              valueAsNumber: true, // This ensures the value is treated as a number
            })}
            error={errors.year?.message}
          />

          <Input id="genre" label="Genre" {...register("genre")} error={errors.genre?.message} />

          <Input
            id="duration"
            label="Duration (seconds or MM:SS)"
            placeholder="180 or 3:00"
            {...register("duration", {
              pattern: {
                value: /^(\d+|\d{1,2}:\d{2})$/,
                message: "Duration must be in seconds (180) or MM:SS format (3:00)",
              },
            })}
            error={errors.duration?.message}
          />
        </FormGrid>

        <FormActions>
          <Button type="button" variant="secondary" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" loading={loading} disabled={loading}>
            {submitText}
          </Button>
        </FormActions>
      </FormContainer>
    </Card>
  )
}

export default SongForm
