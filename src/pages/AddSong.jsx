"use client"

import styled from "@emotion/styled"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createSongRequest } from "../store/slices/songsSlice"
import SongForm from "../components/Songs/SongForm"
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

const AddSong = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.songs)

  const handleSubmit = (songData) => {
    console.log("AddSong - Submitting:", songData) // Debug log
    dispatch(createSongRequest(songData))
    // Don't navigate immediately, let the saga handle success
  }

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <PageContainer>
      <PageHeader>
        <BackButton variant="outline" size="sm" onClick={handleCancel}>
          <ArrowLeft size={16} />
          Back
        </BackButton>
        <PageTitle>Add New Song</PageTitle>
      </PageHeader>

      <SongForm onSubmit={handleSubmit} onCancel={handleCancel} loading={loading} submitText="Add Song" />
    </PageContainer>
  )
}

export default AddSong
