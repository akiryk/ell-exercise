<caBody>
  <div class="ca-body">
    <main class="ca-primary">
      <caPlanner></caPlanner>
      <caComments></caComments>
    </main>
    <div class="ca-secondary">
      <caSidebar></caSidebar>
    </div>
  </div>

  <style>
    .ca-body {
      padding: 2rem;
    }
    .ca-primary {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 60em) {
      .ca-primary {
        margin-bottom: unset;
      }
      @supports (display: grid) {
        .ca-body {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-column-gap: 2rem;
        }
        .ca-primary {
          grid-column: 1;
        }
        .ca-secondary {
          grid-column: 2;
        }
      }
    }

    @media screen and (min-width: 92em) {
      .ca-body {
        padding: 2rem calc(50% - 44em);
      }
    }

  </style>
</caBody>