"use client"
import styled from "@emotion/styled"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from "../UI/Button"
import React from "react"

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.xl};
`

const PageInfo = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[600]};
  margin: 0 ${(props) => props.theme.spacing.md};
`

const PageButton = styled(Button)`
  min-width: 40px;
  height: 40px;
  
  ${(props) =>
    props.active &&
    `
    background: ${props.theme.colors.primary[600]};
    color: white;
    
    &:hover {
      background: ${props.theme.colors.primary[700]};
    }
  `}
`

const Pagination = ({ currentPage, totalPages, onPageChange, total, limit }) => {
  const startItem = (currentPage - 1) * limit + 1
  const endItem = Math.min(currentPage * limit, total)

  const getVisiblePages = () => {
    const pages = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      const start = Math.max(1, currentPage - 2)
      const end = Math.min(totalPages, start + maxVisible - 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (start > 1) {
        pages.unshift("...")
        pages.unshift(1)
      }

      if (end < totalPages) {
        pages.push("...")
        pages.push(totalPages)
      }
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <PaginationContainer>
      <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft size={16} />
      </Button>

      {getVisiblePages().map((page, index) => (
        <PageButton
          key={index}
          variant={page === currentPage ? "primary" : "outline"}
          size="sm"
          active={page === currentPage}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </PageButton>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={16} />
      </Button>

      <PageInfo>
        Showing {startItem}-{endItem} of {total} songs
      </PageInfo>
    </PaginationContainer>
  )
}

export default Pagination
