"use client"

import { useEffect } from "react"
import styled from "@emotion/styled"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchSongRequest, updateSongRequest, clearCurrentSong } from "../store/slices/songsSlice"
import SongForm from "../components/Songs/SongForm"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { ArrowLeft } from "lucide-react"
import Button from "../components/UI/Button"
import React from "react"

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const BackButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
`

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[900]};
`

const EditSong = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentSong, loading } = useSelector((state) => state.songs)

  useEffect(() => {
    if (id) {
      dispatch(fetchSongRequest(id))
    }

    return () => {
      dispatch(clearCurrentSong())
    }
  }, [dispatch, id])

  const handleSubmit = (songData) => {
    console.log("EditSong - Submitting:", songData) // Debug log
    dispatch(updateSongRequest({ id, data: songData }))
    // Don't navigate immediately, let the saga handle success
  }

  const handleCancel = () => {
    navigate("/")
  }

  if (loading && !currentSong) {
    return <LoadingSpinner />
  }

  if (!currentSong) {
    return (
      <PageContainer>
        <div>Song not found</div>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageHeader>
        <BackButton variant="outline" size="sm" onClick={handleCancel}>
          <ArrowLeft size={16} />
          Back
        </BackButton>
        <PageTitle>Edit Song</PageTitle>
      </PageHeader>

      <SongForm
        initialData={currentSong}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
        submitText="Update Song"
      />
    </PageContainer>
  )
}

export default EditSong
