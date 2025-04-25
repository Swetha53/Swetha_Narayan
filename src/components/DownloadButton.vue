<template>
  <a
    class="flex-container downloadButton"
    href="src/assets/Swetha_Narayan.pdf"
    download
  >
    <div class="monofett downloadButton__arrow">
      <div class="downloadButton__arrow-base">
        <p>CV</p>
      </div>
      <div class="downloadButton__arrow-triangle"></div>
    </div>
    <div class="downloadButton__placeholder">
      <p>Download</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
$height: 3rem;

.downloadButton {
  background-color: var(--secondary);
  color: var(--primary);
  width: 100%;
  height: $height;
  border-radius: 8px;
  border-top-right-radius: 0px;
  &:link {
    text-decoration: none;
  }
  &__arrow {
    position: relative;
    width: $height;
    height: $height;
    font-size: 1.75em;
    &-base {
      background-color: var(--tertiary);
      width: 100%;
      height: 100%;
      p {
        margin: unset;
        color: var(--primary);
        text-align: center;
      }
    }
    &-triangle {
      &::after {
        position: absolute;
        top: $height;
        left: calc(0px - $height/2);
        content: "";
        border-top: $height solid var(--tertiary);
        border-bottom: $height solid transparent;
        border-left: $height solid transparent;
        border-right: $height solid transparent;
      }
    }
  }
  &__placeholder {
    width: 100%;
    text-align: center;
    p {
      margin: unset;
    }
  }
  &:hover {
    background-color: var(--tertiary);
    color: var(--primary);
    .downloadButton__arrow {
      &-base {
        background-color: var(--secondary);
        p {
          color: var(--primary);
        }
      }
      &-triangle::after {
        border-top: $height solid var(--secondary);
      }
    }
  }
}
</style>
