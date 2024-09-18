<template>
    <div class="carousel-container">
        <div 
            class="carousel"
            @mousemove="onDraggingBanner"
            @mousedown="startDragBanner"
            @mouseup="endDragBanner"  
        >
            <div class="carousel-item"></div>
            <div class="carousel-item"></div>
            <div class="carousel-item"></div>
        </div>
        <div class="indicators">
            <div @click="slideBanner(0)" class="indicator active"></div>
            <div @click="slideBanner(1)" class="indicator"></div>
            <div @click="slideBanner(2)" class="indicator"></div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    setup(props) {
        const isDragging = ref(false);
        const startPoint = ref(0);
        const indexBanner = ref(0);
        const carouselScrollLeft = ref(0);
        /**
         * Ấn con tròn để chuyển banner
         * 18.9.2024
         * @param {} index 
         */
        const slideBanner = (index) =>{
            index = parseInt(index);
            indexBanner.value = index;
            var carousel = document.querySelector('.carousel');
            const targetScrollLeft = index*window.innerWidth;  // Vị trí cuộn mục tiêu
            const duration = 500;  // Thời gian cuộn (ms)
            
            const startScrollLeft = carousel.scrollLeft;
            const distanceToScroll = targetScrollLeft - startScrollLeft;
            const startTime = performance.now();

            function step(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);  // Đảm bảo không vượt quá 1
                carousel.scrollLeft = startScrollLeft + distanceToScroll * easeInOutQuad(progress);
                
                if (progress < 1) {
                window.requestAnimationFrame(step);  // Tiếp tục gọi step cho đến khi hoàn tất
                }
            }

            window.requestAnimationFrame(step);
            // carousel.scrollLeft = index*window.innerWidth;
        }
        /**
         * Tính lại tỉ lệ
         * 18.9.2024
         */
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        }
        /**
         * Bắt đầu kéo
         * Dùng clientX vì offsetX sẽ bị set lại khi phần tử bị scroll
         */
        function startDragBanner(event){
            isDragging.value = true;
            startPoint.value = event.clientX;
            var carousel = document.querySelector('.carousel');
            carouselScrollLeft.value = carousel.scrollLeft;
            // console.log(startPoint.value);
        }
        /**
         * Thả ra 
         */
        function endDragBanner(event){
            isDragging.value = false;
            if(event.clientX - startPoint.value < -100){
                indexBanner.value++;
                this.slideBanner(indexBanner.value);
            } else if (event.clientX - startPoint.value > 100){
                indexBanner.value--;
                this.slideBanner(indexBanner.value);
            } else {
                this.slideBanner(indexBanner.value);
            }
        }
        /**
         * Trong quá trình kéo thả banner
         * 18.9.2024
         */
        function onDraggingBanner(event){
            var carousel = document.querySelector('.carousel');
            if(isDragging.value){
                carousel.scrollLeft = event.clientX - startPoint.value < 0 ? carouselScrollLeft.value + Math.abs(event.clientX - startPoint.value) : carouselScrollLeft.value - Math.abs(event.clientX - startPoint.value);
            }
        }
        return{
            slideBanner,
            onDraggingBanner,
            startDragBanner,
            endDragBanner,
        }
    }
}
</script>
<style lang="scss" scoped>
.carousel-container{

    margin-top: 125px;
    width: 100vw;
    height: 83vh;
    position: relative;
    z-index: 1;
    .carousel {
        display: flex;
        overflow: hidden;
        width: 100%;
        height: 100%;
        div {
            width: 100%;
            height: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            flex: 0 0 100%;
        }

        // position: relative;
        div:nth-child(1) {
            background-image: url('@/assets/car-slide-1.jpg');
        }

        div:nth-child(2) {
            background-image: url('@/assets/car-slide-2.jpg');
        }

        div:nth-child(3) {
            background-image: url('@/assets/car-slide-3.jpg');
        }
    }
    .indicators {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        position: absolute;
        bottom: 5px;
        left: 50%;
    }

    .indicator {
        width: 12px;
        height: 12px;
        background-color: #bbb;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }
}

</style>