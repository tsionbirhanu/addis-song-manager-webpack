"use client"

import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Search, X } from "lucide-react"
import { useDispatch } from "react-redux"
import { fetchSongsRequest } from "../../store/slices/songsSlice"
import { useDebounce } from "../../hooks/useDebounce"
import React from "react";

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
`

const SearchInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  padding-left: 2.5rem;
  padding-right: ${(props) => (props.hasValue ? "2.5rem" : props.theme.spacing.md)};
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[100]};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[400]};
  }
`

const SearchIcon = styled(Search)`
  position: absolute;
  left: ${(props) => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.colors.gray[400]};
`

const ClearButton = styled.button`
  position: absolute;
  right: ${(props) => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.theme.colors.gray[200]};
  color: ${(props) => props.theme.colors.gray[500]};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${(props) => props.theme.colors.gray[300]};
    color: ${(props) => props.theme.colors.gray[700]};
  }
`

const SearchBar = ({ placeholder = "Search songs, artists, albums..." }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      fetchSongsRequest({
        page: 1,
        search: debouncedSearchTerm,
      }),
    )
  }, [debouncedSearchTerm, dispatch])

  const handleClear = () => {
    setSearchTerm("")
  }

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        hasValue={searchTerm.length > 0}
      />
      {searchTerm && (
        <ClearButton onClick={handleClear}>
          <X size={14} />
        </ClearButton>
      )}
    </SearchContainer>
  )
}

export default SearchBar
