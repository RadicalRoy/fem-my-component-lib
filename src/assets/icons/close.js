import React from 'react'
import styled from 'styled-components'

const CloseIconWrapper = styled.svg`
    width:100%;
    height: 100%;
`

export const CloseIcon = () => (
    <CloseIconWrapper aira-hidden="true">
           <path 
           fill="#000000" 
           d="M81.128,5.458L81.128,5.458c3.586,0,6.945,1.384,9.457,3.896l0.062,0.062  c2.512,2.512,3.896,5.871,3.896,9.457s-1.383,6.945-3.896,9.457L72.128,46.848L68.976,50l3.152,3.152L90.646,71.67  c2.512,2.512,3.896,5.871,3.896,9.457c0,3.586-1.383,6.945-3.895,9.457l-0.062,0.062c-2.513,2.512-5.871,3.896-9.457,3.896  c-3.586,0-6.945-1.384-9.457-3.896L53.152,72.128L50,68.976l-3.152,3.152L28.33,90.646c-2.512,2.512-5.871,3.896-9.458,3.896  c-3.586,0-6.944-1.383-9.453-3.892l-0.065-0.065c-2.512-2.512-3.896-5.871-3.896-9.457c0-3.586,1.384-6.945,3.896-9.457  l18.518-18.518L31.024,50l-3.152-3.152L9.354,28.33c-2.512-2.512-3.896-5.871-3.896-9.457s1.383-6.945,3.895-9.457l0.062-0.062  c2.512-2.512,5.871-3.896,9.457-3.895c3.587,0,6.945,1.383,9.457,3.896l18.518,18.518L50,31.024l3.152-3.152L71.67,9.354  C74.183,6.842,77.541,5.458,81.128,5.458 M81.127,1c-4.571,0-9.142,1.734-12.609,5.201L50,24.719L31.482,6.201  C28.014,2.734,23.443,1,18.872,1C14.301,1,9.731,2.734,6.263,6.201L6.201,6.263c-6.935,6.935-6.935,18.284,0,25.219L24.72,50  L6.202,68.518c-6.935,6.935-6.935,18.284,0,25.219l0.061,0.061C9.73,97.266,14.301,99,18.872,99c0,0,0,0,0.001,0  c4.571,0,9.142-1.734,12.609-5.201L50,75.28l18.518,18.518C71.986,97.266,76.557,99,81.127,99c4.571,0,9.142-1.734,12.61-5.201  l0.061-0.061c6.935-6.935,6.935-18.284,0-25.219L75.28,50l18.518-18.518c6.935-6.935,6.935-18.284,0-25.219l-0.062-0.062  C90.269,2.734,85.698,1,81.127,1L81.127,1z"/>
    </CloseIconWrapper>
)
