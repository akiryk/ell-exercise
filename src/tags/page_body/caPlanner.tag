
<caPlanner>
  <appTabHeaders isclicked={this.handleClick} tabs={this.tabs}></appTabHeaders>
  <div class="container">
    <appTabContents tabs={this.tabs} use_image={true}></appTabContents>
  </div>

  <script>
    this.tabs = [
      {
        id: 0,
        title: "About",
        active: true,
        content: 'content/about.html',
      },
      {
        id: 1,
        title: "Activity Plan",
        content: 'content/activity.html',
      },
      {
        id: 2,
        title: "Examples",
        content: 'content/examples.html',
      }
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
    .container {
      border: 1px solid var(--border-color);
      border-top: none;
      padding: .25rem;
    }
    .content-main {
      padding: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }

    /* Loaded content styles*/

    .planner-content {
      grid-column: 1/3;
    }
    .planner-content--full {
      grid-column: 1/4;
    }
    .planner-sidebar {
      grid-column: 3/4;
    }
    .planner-headings {
      margin-top: 0;
    }
    .button-row {
      margin-bottom: 1rem;
    }
    .quiet-text {
      color: #777;
      font-size: 1rem;
    }
    .callout-side {
      background: var(--bg-gray);
      padding: 1rem;
      border: 1px solid var(--border-color);
      margin-bottom: 1rem;
    }
    .callout-full {
      display: flex;
      background: var(--bg-gray);
      margin:1rem -1.25rem;
      padding: 0 1.25rem;
    }
    /*icons*/
     .fa-bullhorn {
      float: left;
      border-radius: 6px;
      margin-right: .5rem;
      font-size: 2rem;
      padding: .2em;
      background-color: #999;
      width: 60px;
      height: 40px;
      display: block;
      transform: translateY(-.25rem);
    }
  </style>

</caPlanner>