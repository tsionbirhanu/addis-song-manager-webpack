"use client"

import { useState } from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Edit, Trash2, Music, Clock, Calendar } from "lucide-react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteSongRequest } from "../../store/slices/songsSlice"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import React from "react"

const CardContainer = styled(motion.div)`
  background: white;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.sm};
  border: 1px solid ${(props) => props.theme.colors.gray[200]};
  overflow: hidden;
  transition: all 0.2s ease;
  height: fit-content;
  
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
    transform: translateY(-2px);
  }
  
  /* Mobile optimizations */
  @media (max-width: 640px) {
    border-radius: ${(props) => props.theme.borderRadius.lg};
  }
`

const CardHeader = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary[500]}, ${(props) => props.theme.colors.primary[600]});
  color: white;
  
  /* Mobile */
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.md};
  }
`

const SongTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  line-height: 1.3;
  word-break: break-word;
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 1.125rem;
  }
`

const SongArtist = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  word-break: break-word;
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 0.8125rem;
  }
`

const SongAlbum = styled.p`
  font-size: 0.75rem;
  opacity: 0.8;
  word-break: break-word;
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 0.6875rem;
  }
`

const CardContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  
  /* Mobile */
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.md};
  }
`

const SongDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  
  /* Mobile */
  @media (max-width: 640px) {
    gap: ${(props) => props.theme.spacing.sm};
    margin-bottom: ${(props) => props.theme.spacing.md};
  }
`

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[600]};
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 0.8125rem;
  }
`

const GenreBadge = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
  background: ${(props) => props.theme.colors.primary[100]};
  color: ${(props) => props.theme.colors.primary[700]};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 500;
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 0.6875rem;
    padding: 2px ${(props) => props.theme.spacing.xs};
  }
`

const CardActions = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  justify-content: flex-end;
  padding-top: ${(props) => props.theme.spacing.md};
  border-top: 1px solid ${(props) => props.theme.colors.gray[200]};
  
  /* Mobile - stack buttons vertically on very small screens */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.xs};
  }
  
  /* Mobile - make buttons smaller */
  @media (max-width: 640px) {
    gap: ${(props) => props.theme.spacing.xs};
  }
`

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

const SongCard = ({ song }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/edit/${song.id}`)
  }

  const handleDelete = () => {
    dispatch(deleteSongRequest(song.id))
    setShowDeleteModal(false)
  }

  return (
    <>
      <CardContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -4 }}
      >
        <CardHeader>
          <SongTitle>
            <Music size={20} />
            {song.title}
          </SongTitle>
          <SongArtist>{song.artist}</SongArtist>
          <SongAlbum>{song.album}</SongAlbum>
        </CardHeader>

        <CardContent>
          <SongDetails>
            <DetailItem>
              <Calendar size={16} />
              {song.year}
            </DetailItem>
            <DetailItem>
              <Clock size={16} />
              {formatDuration(song.duration)}
            </DetailItem>
            <GenreBadge>{song.genre}</GenreBadge>
          </SongDetails>

          <CardActions>
            <Button variant="outline" size="sm" onClick={handleEdit}>
              <Edit size={16} />
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => setShowDeleteModal(true)}>
              <Trash2 size={16} />
              Delete
            </Button>
          </CardActions>
        </CardContent>
      </CardContainer>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Song"
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete "{song.title}" by {song.artist}? This action cannot be undone.
        </p>
      </Modal>
    </>
  )
}

export default SongCard
