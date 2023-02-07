import styled from "styled-components";

export const Container = styled.div`
    height: 34rem;

    .slick-slider {
        position: relative;
        height: inherit;

        position: relative;
        box-sizing: border-box;

        -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;

        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
            touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;

        min-height: 6rem;
    }

    .slick-list
    {
    height: inherit;

    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;

    }
    .slick-list:focus
    {
    outline: none;
    }
    .slick-list.dragging
    {
    cursor: pointer;
    cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list
    {
    -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    }

    .slick-track
    {
    height: inherit;

    display: block;
    margin-left: auto;
    margin-right: auto;

    }
    .slick-track:before,
    .slick-track:after
    {
    display: table;

    content: '';
    }
    .slick-track:after
    {
    clear: both;
    }
    .slick-loading .slick-track
    {
    visibility: hidden;
    }

    .slick-slide
    {

    height: inherit;

    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
    margin: 0 1.6rem;
    }
    [dir='rtl'] .slick-slide
    {
    float: right;
    }
    .slick-slide img
    {
    display: block;
    overflow: hidden;
    width: inherit;
    }
    .slick-slide.slick-loading img
    {
    display: none;
    }
    .slick-slide.dragging img
    {
    pointer-events: none;
    }
    .slick-initialized .slick-slide
    {
    display: block;
    }
    .slick-loading .slick-slide
    {
    visibility: hidden;
    }
    .slick-vertical .slick-slide
    {
    display: block;

    height: auto;

    border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
    display: none;
    }
    .slick-loading .slick-list
    {
    background: #fff url('./ajax-loader.gif') center center no-repeat;
    }
    
    /* Arrows */
    .slick-prev,
    .slick-next
    {
    position: absolute;
    top: 0;
    bottom: 0;
      
    font-size: 0;
    line-height: 0;

    display: block;

    width: 9rem;
    height: inherit;
    
    padding: 0;

    cursor: pointer;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    > svg {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
        width: 2.5rem;
        height: 2.5rem;
    }

    opacity: 1;
    border: none;
    outline: none;
    background: ${({theme}) => theme.COLORS.GRADIENT_100};
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus
    {
        
    color: white;

    outline: none;
    opacity: 0.7;
    height: inherit;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before
    {
    opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before
    {
    opacity: .25;
    }

    .slick-prev:before,
    .slick-next:before
    {
    font-family: 'slick';
    font-size: 10px;
    line-height: 1;

    opacity: .75;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    .slick-prev
    {
    float: left;
    left: 0px;
    z-index: 1;
    transform: matrix(-1, 0, 0, 1, 0, 0);

    }
    [dir='rtl'] .slick-prev
    {
    right: -25px;
    left: auto;
    }
    .slick-prev:before
    {
    content: '←';
    }
    [dir='rtl'] .slick-prev:before
    {
    content: '→';
    }

    .slick-next
    {
    float: right;
    right: 0px;
    z-index: 1;
    transform: matrix(1, 0, 0, -1, 0, 0);

    }
    [dir='rtl'] .slick-next
    {
    right: auto;
    left: -25px;
    }
    .slick-next:before
    {
    content: '→';
    }
    [dir='rtl'] .slick-next:before
    {
    content: '←';
    }

    /* Dots */
    .slick-dotted.slick-slider
    {
    margin-bottom: 30px;
    }

    .slick-dots
    {
    position: absolute;
    bottom: -55px;
    z-index: 5;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;
    font-size: 2rem;
    text-align: center;

    }
    .slick-dots li
    {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 5px;
    padding: 0;

    cursor: pointer;
    }
    .slick-dots li svg
    {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 36px;
    height: 36px;
    padding: 5px;

    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: 0;
    outline: none;
    background: transparent;
    }

    .slick-dots li svg:hover,
    .slick-dots li svg:focus
    {
    outline: none;
    }
    
    .slick-dots li svg:hover:before,
    .slick-dots li svg:focus:before
    {
    opacity: 1;
    }
    .slick-dots li svg:before
    {
    font-size: 3rem;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 36px;
    height: 36px;

    text-align: center;

    opacity: .25;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    .slick-dots li.slick-active svg
    {
    opacity: 1;
    }

`;