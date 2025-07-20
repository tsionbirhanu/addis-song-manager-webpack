"use client"

import styled from "@emotion/styled"
import { motion } from "framer-motion"
import SongCard from "./SongCard"
import LoadingSpinner from "../UI/LoadingSpinner"
import React from "react"

const ListContainer = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.lg};
  
  /* Mobile - 1 column */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
  }
  
  /* Tablet - 2 columns */
  @media (min-width: 641px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Desktop - 3 columns */
  @media (min-width: 1024px) and (max-width: 1439px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  /* Large Desktop - 4 columns */
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing["3xl"]};
  text-align: center;
  color: ${(props) => props.theme.colors.gray[500]};
  
  /* Mobile */
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.xl};
  }
`

const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.gray[700]};
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 1.125rem;
  }
`

const EmptyDescription = styled.p`
  font-size: 0.875rem;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 0.8125rem;
  }
`

const SongList = ({ songs, loading }) => {
  if (loading) {
    return <LoadingSpinner />
  }

  if (!songs || songs.length === 0) {
    return (
      <EmptyState>
        <EmptyTitle>No songs found</EmptyTitle>
        <EmptyDescription>Start building your music library by adding your first song.</EmptyDescription>
      </EmptyState>
    )
  }

  return (
    <ListContainer>
      {songs.map((song, index) => (
        <motion.div
          key={song.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <SongCard song={song} />
        </motion.div>
      ))}
    </ListContainer>
  )
}

export default SongList
