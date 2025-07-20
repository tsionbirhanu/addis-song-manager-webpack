"use client"

import styled from "@emotion/styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Menu, Search, Plus, X } from "lucide-react"
import { toggleSidebar } from "../../store/slices/uiSlice"
import Button from "../UI/Button"
import { useNavigate } from "react-router-dom"
import React from "react"

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  background: white;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};
  box-shadow: ${(props) => props.theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
  
  /* Mobile */
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing.sm};
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  
  @media (max-width: 640px) {
    gap: ${(props) => props.theme.spacing.sm};
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  
  /* Mobile */
  @media (max-width: 640px) {
    gap: ${(props) => props.theme.spacing.sm};
    ${(props) =>
      props.searchOpen &&
      `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      padding: ${props.theme.spacing.md};
      border-bottom: 1px solid ${props.theme.colors.gray[200]};
      box-shadow: ${props.theme.shadows.sm};
    `}
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray[900]};
  
  /* Mobile */
  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
  
  /* Hide on very small screens */
  @media (max-width: 480px) {
    display: none;
  }
`

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.gray[100]};
  color: ${(props) => props.theme.colors.gray[600]};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.gray[200]};
    color: ${(props) => props.theme.colors.gray[900]};
  }
  
  /* Mobile */
  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
  }
`

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  /* Mobile - hide by default, show when search is open */
  @media (max-width: 768px) {
    display: ${(props) => (props.searchOpen ? "flex" : "none")};
    width: 100%;
  }
  
  /* Tablet and up */
  @media (min-width: 769px) {
    display: flex;
  }
`

const SearchInput = styled.input`
  width: 300px;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  padding-left: 2.5rem;
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
  
  /* Mobile */
  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
  }
  
  /* Tablet */
  @media (min-width: 769px) and (max-width: 1023px) {
    width: 250px;
  }
`

const SearchIcon = styled(Search)`
  position: absolute;
  left: ${(props) => props.theme.spacing.sm};
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.colors.gray[400]};
`

const MobileSearchButton = styled(MenuButton)`
  @media (min-width: 769px) {
    display: none;
  }
`

const AddButton = styled(Button)`
  /* Mobile - make it smaller */
  @media (max-width: 640px) {
    padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
    font-size: 0.875rem;
    
    span {
      display: none; /* Hide text on very small screens */
    }
  }
`

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchOpen, setSearchOpen] = useState(false)

  const handleMenuClick = () => {
    dispatch(toggleSidebar())
  }

  const handleAddSong = () => {
    navigate("/add")
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <HeaderContainer>
      <LeftSection>
        <MenuButton onClick={handleMenuClick}>
          <Menu size={20} />
        </MenuButton>
        <Title>Song Manager</Title>
      </LeftSection>

      <RightSection searchOpen={searchOpen}>
        <SearchContainer searchOpen={searchOpen}>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search songs, artists, albums..." />
        </SearchContainer>

        <MobileSearchButton onClick={toggleSearch}>
          {searchOpen ? <X size={20} /> : <Search size={20} />}
        </MobileSearchButton>

        <AddButton variant="primary" size="sm" onClick={handleAddSong}>
          <Plus size={16} />
          <span>Add Song</span>
        </AddButton>
      </RightSection>
    </HeaderContainer>
  )
}

export default Header
