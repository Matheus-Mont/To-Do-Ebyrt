import React from 'react';
import TaskCard from './TaskCard';

export default function Footer () {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <a className="link-light" href='https://www.linkedin.com/in/matheusoliveiramonteiro/'>
          <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Matheus Oliveira Monteiro</span>
        </a>
      </div>
  </footer>
  )
}