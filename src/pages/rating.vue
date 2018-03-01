<template>
    <div>
        <div v-if="detail||rating.average!=0">
            <span :class="'allstart'+rating.stars"></span>
            <slot name="rating__text"></slot>
        </div>
        <div v-if="rating.average==0" class="details__score">
            暂无评分
        </div>
    </div>
</template>
<script>
export default {
    name: "rating",
    props: ['rating','detail'],
    data() {
        return {
        }
    },
}
</script>
<style lang="scss" scoped>
* {
    font-size: 12px;
    color: #9b9b9b;
}

.allstart {
    &00 {
        background-position: 0 -110px;
    }
    &05 {
        background-position: 0 -99px;
    }
    &10 {
        background-position: 0 -88px;
    }
    &15 {
        background-position: 0 -77px;
    }
    &20 {
        background-position: 0 -66px;
    }
    &25 {
        background-position: 0 -55px;
    }
    &30 {
        background-position: 0 -44px;
    }
    &35 {
        background-position: 0 -33px;
    }
    &40 {
        background-position: 0 -22px;
    }
    &45 {
        background-position: 0 -11px;
    }
    &50 {
        background-position: 0 0px;
    }
}

[class^="allstart"] {
    display: inline-block;
    height: 11px;
    width: 55px;
    background-image: url("../assets/ic_rating_s.png");
    margin-right: 7px;
    margin-top: 3px;
}
.details__score{
    margin-top: 3px;
}
</style>