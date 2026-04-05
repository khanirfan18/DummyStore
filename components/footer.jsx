import { FaGithub } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="footer-main">
      <p>Irfan K. 
        <a 
          href="https://github.com/khanirfan18" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub />
        </a>
      </p>
    </footer>
  )
}