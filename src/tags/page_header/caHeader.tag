// Classroom Activities Header
<caHeader>
  <header role="banner" class="ca-head">
    <div class="ca-head__main">
      <h1 class="title">Hanging Hashtags</h1>
      <caLogoBlock></caLogoBlock>
      <caEngage></caEngage>
    </div>
    <div class="ca-head__side">
      <caResources></caResources>
    </div>
  </header>

  <style>
    .ca-head {
      background: #4a4a4a;
      padding: 2rem;
    }
    .ca-head__main {
      grid-column: 1;
    }
    .ca-head__side {
      grid-column: 2;
    }
    .title {
      font-family: 'Open Sans', sans-serif;
      font-size: 3rem;
      font-weight: 100;
      color: #fdfdfd;
      margin: 0;
    }

    @media screen and (min-width: 60em) {
      .ca-head {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 2rem;
        justify-content: space-between;
        min-height: 20em;
        position: relative;
      }
    }

    @media screen and (min-width: 92em) {
      .ca-head {
        padding: 2rem calc(50% - 44em);
      }
    }

  </style>
</caHeader>