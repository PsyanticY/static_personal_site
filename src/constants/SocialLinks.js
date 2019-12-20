import React from "react"
import {
  FaGithub,
  FaTwitterSquare,
  FaRedditSquare,
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "https://www.reddit.com/user/PsyanticY",
    image: <FaRedditSquare className="reddit-icon" />,
  },
  {
    id: Math.random(),
    url: "https://github.com/PsyanticY",
    image: <FaGithub className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "#",
    image: <FaTwitterSquare className="twitter-icon" />,
  },
]
