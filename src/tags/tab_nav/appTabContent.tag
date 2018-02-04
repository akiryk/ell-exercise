<appTabContent>
    <div class="{active: opts.tab.active} tab-content">
      <img if={opts.tab.image} src="images/{opts.tab.image}" alt="">
      <div class="content-main" ref="content" if={opts.tab.content}>

      </div>
    </div>

    <script>
      this.on('mount', function(){
        if(this.opts.tab.content) {
          handleAjax(this.opts.tab.content);
        }
      })

      function handleAjax(content) {
        const request = new XMLHttpRequest()
        request.open('GET', content, true);
        request.send();
        function handleProgress(e) {
          if (e.type==="load") {
            render(request.responseText);
          } else if (e.type==="error"){
            console.log('error loading content to appTabContent');
          }
        }
        request.addEventListener("load", handleProgress, false);
        request.addEventListener("error", handleProgress, false);
      }

      const render = (content) => {
        this.refs.content.innerHTML = content;
      }
    </script>

    <style>
      .tab-content {
        display: none;
      }
      .tab-content.active {
        display: block;
      }

    </style>

</appTabContent>