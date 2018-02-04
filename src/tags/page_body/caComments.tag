<caComments>
  <appSubtitle txt="Comments (20)"></appSubtitle>
  <div class="buttons">
    <appButton txt="Add New Comment" icon="fas fa-comment"></appButton>
  </div>
  <appTabHeaders isclicked={this.handleClick} tabs={this.tabs}></appTabHeaders>
  <div class="outlined">
    <appTabContents tabs={this.tabs}></appTabContents>
  </div>

  <script>
    this.tabs = [
      {
          id: 0,
          title: "Comments (1)",
          active: true,
          content: 'content/comments.html',
      },
      {
          id: 1,
          title: "Private Notes (19)",
          content: 'content/notes.html',
      },
    ];

    this.handleClick = (e) => {
      this.tabs.forEach((tab) => {
        // e.item is current item in a loop
        if (e.item.tab.id == tab.id) {
          tab.active = true;
        } else {
          tab.active = false;
        }
      });

      this.update();
    }
  </script>

  <style>
    .buttons {
      margin-bottom: 1rem;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .comment {
      display: flex;
      align-items: center;
      color: #666;
      margin-bottom: 2rem;
    }
    .comment-image {
      flex: 0 0 3.5em;
      float: left;
      width: 3.5em;
      height: 3.5em;
      border-radius: 50%;
      background: #ccc;
      margin-right: 1em;
    }
    .comment-body {
      flex: 1 1 auto;
    }
    .username {
      text-transform: uppercase;
      font-weight: 700;
      color: #333;
    }
    .likes {
      font-size: .875em;
    }
    .fa-thumbs-up {
      font-size: 1.25em;
    }
    .date-published {
      color: #aaa;
      font-size: .75rem;
    }
    .outlined {
      border: 1px solid var(--border-color);
      border-top: none;
      padding: 1.25rem;

    }
    .input-wrapper {
      position: relative;
    }
    .input-field {
      padding: .5em .5em .5em 2em;
      border: 1px solid var(--input-border-color);
      border-radius: 6px;
      font-size: .875rem;
      color: #999;
      -webkit-appearance: none;
      -moz-appearance:    none;
      appearance:         none;
    }
    .search-icon {
      color: #999;
      position: absolute;
      top: 0;
      left: 0.5em;
      transform: translateY(50%);
    }
  </style>

</caComments>