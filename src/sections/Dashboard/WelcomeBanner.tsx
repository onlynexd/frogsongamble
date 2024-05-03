import React from 'react'
import styled from 'styled-components'
import { EXPLORER_URL } from '../../constants'

const Buttons = styled.div`
  display: flex;
  justify-content: center; // Centering the buttons horizontally
  gap: 10px;
  padding: 20px 0; // Adding padding for spacing

  @media (min-width: 800px) {
    flex-direction: row; // Buttons side by side on larger screens
  }

  @media (max-width: 800px) {
    flex-direction: row; // Buttons side by side on smaller screens
    width: 100%;
  }

  & > button {
    border: none;
    min-width: 150px; // Ensuring buttons have a minimum width
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    color: black;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`

const Welcome = styled.div`
  background: url('banner.png') no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column; // Changed to column to stack elements vertically
  align-items: center; // Centering content horizontally
  justify-content: center;
  min-height: 300px; // Setting a minimum height
  width: 100%; // Ensuring it takes full width
  padding: 20px;
  filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));
`

export function WelcomeBanner() {
  return (
    <div> {/* Wrapper div to contain both components */}
      <Welcome>
        <div>
          <h1>Welcome to Frogs on Gamble 👋</h1>
          <p>
            A fair, simple, and decentralized casino on Solana.
          </p>
        </div>
      </Welcome>
      <Buttons>
        <button onClick={() => window.open('https://twitter.com/frogsongamble', '_blank')}>
          🐸 Follow us on Twitter
        </button>
        <button onClick={() => window.open('https://discord.gg/VPWMksvQ', '_blank')}>
          💬 Join Discord
        </button>
      </Buttons>
    </div>
  )
}
