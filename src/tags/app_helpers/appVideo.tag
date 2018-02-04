<appVideo>
  <div class="placeholder-video"><i class="far fa-play-circle icon"></i></div>

  <style>
    .placeholder-video {
      height: 0;
      padding-top: 55%;
      background-color: #555;
      border: 1px solid #fff;
      position: relative;
      transition: all 1s;
    }
    .placeholder-video:hover {
      background-color: #333;
      box-shadow: 0 26px 16px -20px rgba(0,0,0,0.5);
    }
    .placeholder-video:hover > .icon{
      color: #fff;
    }
    .icon {
      color: rgba(255,255,255,0.5);
      font-size: 4em;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: color 1s;
    }
  </style>
</appVideo>
