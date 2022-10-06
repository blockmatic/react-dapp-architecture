import * as React from 'react'
import type { Token } from '@stitches/react/types/theme'

const EosIcon: React.FC<React.SVGProps<SVGSVGElement & { color?: Token<any, string, "colors", ""> | string }>> = ({ color = '#fefefe',...props }) => (
  <svg width="32" height="29" viewBox="0 0 32 29" fill={'none'} { ...props }>
  <g id="cryptocurrency:eos" clipPath="url(#clip0_872_880)">
    <path id="Vector" d="M16.002 29.0002C7.68382 29.0002 0.941406 22.526 0.941406 14.5387C0.941406 6.5514 7.68382 0.0771484 16.002 0.0771484C24.3201 0.0771484 31.0625 6.5514 31.0625 14.5387C31.0625 22.526 24.3201 29.0002 16.002 29.0002ZM10.8927 10.5139L8.56769 20.7129C8.55065 20.7753 8.55573 20.8415 8.58215 20.9009C8.60856 20.9603 8.6548 21.0096 8.71359 21.041L15.8419 25.3297C15.8946 25.3613 15.9511 25.3749 16.0048 25.3749C16.0628 25.3754 16.1197 25.3597 16.1686 25.3297L23.2969 21.041C23.3555 21.0094 23.4016 20.9601 23.4278 20.9007C23.454 20.8413 23.459 20.7752 23.4419 20.7129L21.1169 10.5139C21.108 10.4713 21.0894 10.4311 21.0623 10.3964L16.2523 4.08571C16.2245 4.04774 16.1874 4.01698 16.1442 3.99616C16.101 3.97534 16.0531 3.96512 16.0048 3.9664C15.9566 3.96527 15.9089 3.97556 15.8659 3.99637C15.8229 4.01719 15.7859 4.04787 15.7582 4.08571L10.9482 10.3973C10.9208 10.4319 10.9018 10.4721 10.8927 10.5148V10.5139ZM9.57957 18.9802L11.2428 11.6861L12.1935 14.5522L9.57957 18.9802ZM9.37625 20.4986L12.442 15.3033L14.1646 20.4977H9.37531L9.37625 20.4986ZM9.90808 21.0771H14.3566L15.4654 24.4204L9.90808 21.0762V21.0771ZM12.5973 13.8662L11.5214 10.6232L15.7007 5.1414V8.60855L12.5973 13.8662ZM16.0048 24.1421L14.9882 21.0762H17.0214L16.0048 24.1421ZM16.5451 24.4204L17.6539 21.0762H22.1024L16.5451 24.4204ZM20.7677 11.6861L22.43 18.9802L19.817 14.5522L20.7677 11.6871V11.6861ZM19.4122 13.8662L16.3098 8.60946V5.1414L20.4891 10.6232L19.4122 13.8662ZM22.6333 20.4977H17.8469L19.5694 15.3033L22.6342 20.4977H22.6333ZM16.0048 9.26565L19.1637 14.6173L17.2134 20.4977H14.7971L12.8468 14.6173L16.0048 9.26565Z" fill={color as string} />
  </g>
  <defs>
    <clipPath id="clip0_872_880">
      <rect width="30.1211" height="28.9231" fill={color as string} transform="translate(0.941406 0.0771484)" />
    </clipPath>
  </defs>
</svg>
)

export default EosIcon