"use client"

import { useEffect } from "react"
import styled from "@emotion/styled"
import { useSelector, useDispatch } from "react-redux"
import { fetchSongsRequest } from "../store/slices/songsSlice"
import SongList from "../components/Songs/SongList"
import SearchBar from "../components/Songs/SearchBar"
import Pagination from "../components/Songs/Pagination"
import Button from "../components/UI/Button"
import { Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import React from "react";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.md};
    align-items: stretch;
  }
`

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[900]};
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`



const SongListPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { songs, loading, pagination } = useSelector((state) => state.songs)

  useEffect(() => {
    dispatch(fetchSongsRequest({ page: 1 }))
  }, [dispatch])

  const handlePageChange = (page) => {
    dispatch(fetchSongsRequest({ page }))
  }

  const handleAddSong = () => {
    navigate("/add")
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>My Music Library</PageTitle>
        <HeaderActions>
          <SearchBar />
          <Button variant="primary" onClick={handleAddSong}>
            <Plus size={16} />
            Add Song
          </Button>
        </HeaderActions>
      </PageHeader>

      <SongList songs={songs} loading={loading} />

      <Pagination
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        total={pagination.total}
        limit={pagination.limit}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  )
}

export default SongListPage
