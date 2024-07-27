<template>
  <div class="widget-area">
    <div class="widget widget_search">
      <h3 class="widget-title">Search</h3>

      <form class="search-form">
        <label>
          <span class="screen-reader-text">Search for:</span>
          <input type="search" class="search-field" placeholder="Search..." />
        </label>
        <button type="submit"><i class="bx bx-search-alt"></i></button>
      </form>
    </div>

    <div class="widget widget_parix_posts_thumb">
      <h3 class="widget-title">Popular Posts</h3>

      <div class="item">
        <a href="#" class="thumb">
          <span class="fullimage cover bg1" role="img"></span>
        </a>
        <div class="info">
          <span>June 10, 2020</span>
          <h4 class="title usmall">
            <a href="#">The Data Surrounding Higher Education</a>
          </h4>
        </div>

        <div class="clear"></div>
      </div>

      <div class="item">
        <a href="#" class="thumb">
          <span class="fullimage cover bg2" role="img"></span>
        </a>
        <div class="info">
          <span>June 21, 2020</span>
          <h4 class="title usmall">
            <a href="#">Conversion Rate the Sales Funnel Optimization</a>
          </h4>
        </div>

        <div class="clear"></div>
      </div>

      <div class="item">
        <a href="#" class="thumb">
          <span class="fullimage cover bg3" role="img"></span>
        </a>
        <div class="info">
          <span>June 30, 2020</span>
          <h4 class="title usmall">
            <a href="#">Business Data is changing the world’s Energy</a>
          </h4>
        </div>

        <div class="clear"></div>
      </div>
    </div>

    <div class="widget widget_categories">
      <h3 class="widget-title">Categories</h3>

      <ul>
        <li>
          <a href="#">Design <span class="post-count">(03)</span></a>
        </li>
        <li>
          <a href="#">Lifestyle <span class="post-count">(05)</span></a>
        </li>
        <li>
          <a href="#">Script <span class="post-count">(10)</span></a>
        </li>
        <li>
          <a href="#">Device <span class="post-count">(08)</span></a>
        </li>
        <li>
          <a href="#">Tips <span class="post-count">(01)</span></a>
        </li>
      </ul>
    </div>

    <div class="widget widget_tag_cloud">
      <h3 class="widget-title">Popular Tags</h3>

      <div class="tagcloud">
        <a href="#">Business <span class="tag-link-count"> (3)</span></a>
        <a href="#">Design <span class="tag-link-count"> (3)</span></a>
        <a href="#">Braike <span class="tag-link-count"> (2)</span></a>
        <a href="#">Fashion <span class="tag-link-count"> (2)</span></a>
        <a href="#">Travel <span class="tag-link-count"> (1)</span></a>
        <a href="#">Smart <span class="tag-link-count"> (1)</span></a>
        <a href="#">Marketing <span class="tag-link-count"> (1)</span></a>
        <a href="#">Tips <span class="tag-link-count"> (2)</span></a>
      </div>
    </div>
  </div>
</template>   

<script>
export default {
  name: "BlogSidebar",
};
</script>