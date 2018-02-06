<caSupportSegment>
  <div class="segment">
      <div class="segment-heading">
        <h3 class="title">{opts.support} Support: <span class="subtitle">Speaking {opts.grade}</span></h3>
        <a href="#" onclick={this.handleClick} class="student-link btn btn--small btn--secondary" data-link="{opts.dataid}">{opts.total} students </a>
      </div>
        <div class="student-list" id="list-{opts.dataid}">
          <ul>
            <li>Geraldine Seydoux</li>
            <li>Lene Vestergaard Hau</li>
            <li>Patricia S. Goldman-Rakic</li>
            <li>Ruzena Bajcsy</li>
            <li>Shirley Ann Jackson</li>
            <li>Wolfgang Ernst Pauli</li>
          </ul>
        </div>
      <div class="segment-details">
        <ul class="details-list">
          <li>Lorem ipsum dolor sit amet, consectetur elit.</li>
          <li>Molestias, ab, quidem! Blanditiis dolore dolorem.</li>
        </ul>
      </div>
    </div>
  </div>

   <script>

    //TODO: Debug this, seems like update() doesn't fire when expected.
    // Could be related to how riot.js handles timing when to rerender components.
    this.handleClick = (e) => {
      e.preventDefault();
      const id = e.target.dataset.link;
      const students = document.getElementById('list-' + id);
      students.classList.toggle('hide-students');
      this.update();
    }
    this.on('mount', function() {
      // 1. find the student lists and hide them
      [...document.querySelectorAll('.student-list')].forEach(list => {
        list.classList.add('hide-students');
      });
    })

  </script>

  <style>
    .student-link {
      display: inline-block;
      margin-right: 1rem;
    }
    .student-names {
      display: none;
    }

    .segment-heading {
      border-bottom: 2px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .title {
      margin-left: 1rem;
    }
    .subtitle {
      font-size: .825em;
    }
    .segment-details {
      border-bottom: 2px solid var(--border-color);
      background-color: var(--bg-gray);
    }
    .details-list {
      margin: 0 1rem;
      padding: 1rem;
    }
    .see-students {
      margin-right: 1rem;
    }
    .hide-students {
      display: none;
    }

  </style>
</caSupportSegment>