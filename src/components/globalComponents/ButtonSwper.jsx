import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ButtonSwper = ({payFunction}) => {
  let x
  const parent = useRef(null);
  const child = useRef(null);
  const move = useRef(null);

  const mousemove = useCallback((e) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    x = e.touches[0].clientX - 30 + 'px'
    const containerWidth = parent.current.clientWidth;
    const draggableWidth = move.current.clientWidth;
    if (parseFloat(x) >= containerWidth - draggableWidth) return;
    if (parseInt(x) <= 25) return;
    child.current.style.width = x;
    
  },[child, move, parent ,x])

  const mouseleave = useCallback((e) => {
    const containerWidth = parent.current.clientWidth;
    const draggableWidth = move.current.clientWidth;
    if (parseFloat(x) >= containerWidth || parseFloat(x) >= containerWidth / 2) {
      payFunction()
      child.current.style.width = containerWidth - (draggableWidth / 2) + 'px';
    } else if (parseFloat(x) < 0) {
      child.current.style.width = "fit-content";
    } else if (parseFloat(x) != containerWidth - draggableWidth) {
      child.current.style.width = "fit-content";
    } else {
      child.current.style.width = x;
    }
  },[child, move, parent, x , payFunction])

  const mousedown = useCallback((e) => {
    move.current.addEventListener('touchmove', mousemove);
    move.current.addEventListener('touchend', mouseleave);
  } , [mouseleave, mousemove, move])

  useEffect(() => {
    if (move.current) {
      move.current.addEventListener('touchstart', mousedown);
    }
  }, [mousedown, mouseleave, mousemove, move]);


  return (
    <div ref={parent} className='w-full h-[50px] overflow-hidden bg-mobileMain py-2 px-2 relative rounded-3xl'>
      <h3 className='uppercase text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Swipe To Pay</h3>
      <div ref={child} className='w-fit h-full text-white bg-mobileMain flex justify-end items-center relative z-10 duration-300'>
        <span ref={move} 
          className='h-full'>
          <BsFillArrowRightCircleFill  size={33}/>
        </span>
      </div>
    </div>
  );
};

export default ButtonSwper;