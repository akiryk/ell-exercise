<appButton>
  <button class={opts.icon ? 'btn icon-button' : 'btn'}><i if={opts.icon} class="icon {opts.icon}"></i>{opts.txt}</button>

  <style>
    .btn {
      color: #fff;
      background-color: #999;
      border: none;
      border-radius: .375rem;
      font-size: .875rem;
      padding: .75em 1em;
    }
    .icon-button {
      padding: .75em 1em .75em 2.5em;
      position: relative;
    }
    .icon {
      margin-right: .5em;
      font-size: 1.125rem;
      position: absolute;
      left: .5em;
    }
  </style>
</appButton>