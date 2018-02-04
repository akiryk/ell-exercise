<appTabHeaders>
  <ul class="headers">
    <virtual each={tab in opts.tabs}>
      <li class="header {active: tab.active}" onclick={parent.opts.isclicked}>{tab.title}</li>
    </virtual>
  </ul>

  <style>
    .headers {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .header {
      flex: 1 1 33.3333%;
      text-align: center;
      font-weight: 700;
      border: 1px solid var(--border-color);
      border-right: none;
      padding: 1em;
      font-size: 1.25rem;
      background-color: var(--bg-gray);
      cursor: pointer;
      transition: background-color .5s;
    }
    .header.active {
      background-color: #fff;
    }
    .header:not(.active):hover {
      background-color: #cfcfcf;
    }
    .header:last-of-type {
      border-right: 1px solid var(--border-color);
    }

  </style>
</appTabHeaders>