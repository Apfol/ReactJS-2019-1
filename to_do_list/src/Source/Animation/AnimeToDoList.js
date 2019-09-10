import React, {Component} from 'react';
import anime from 'animejs';
import animation from './AnimeToDoList.css';

var velocity = 250;
class AnimeToDoList extends Component{
animationT(){
  anime({
    targets: '#st1',
    strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: velocity
  });
 }
animationO(){
 anime({
   targets: '#st0',
   strokeDashoffset: [anime.setDashoffset, 0],
   easing: 'easeInOutSine',
   duration: velocity,
   delay: velocity	
 });
  }
  animationDo(){
 anime({
   targets: '#st4',
   strokeDashoffset: [anime.setDashoffset, 0],
   easing: 'easeInOutSine',
   duration: velocity*2,
   delay: velocity*2	
 });
  }
  animationL(){
 anime({
   targets: '#st3',
   strokeDashoffset: [anime.setDashoffset, 0],
   easing: 'easeInOutSine',
   duration: velocity/2,
   delay: velocity*4	
 });
  }
  animationIst(){
 anime({
   targets: '#st2',
   strokeDashoffset: [anime.setDashoffset, 0],
   easing: 'easeInOutSine',
   duration: velocity+(velocity/2),
   delay: velocity*4+(velocity/2)	
 });
  }
  animationDot(){
 anime({
   targets: '#st5',
   strokeDashoffset: [anime.setDashoffset, 0],
   easing: 'easeInOutSine',
   duration: velocity/2,
   delay: velocity*6	
 });
  }
  animationDot0(){
 anime({
   targets: '#st6',
   strokeDashoffset: [anime.setDashoffset, 0],
   easing: 'easeInOutSine',
   duration: velocity/2,
   delay: velocity*6+(velocity/2)	
 });
  }
 componentDidMount(){
 this.animationT()
 this.animationO()
 this.animationDo()
 this.animationL()
 this.animationIst()
 this.animationDot()
 this.animationDot0()
 }
render() {
return (
<div className={animation.container}>
<svg viewBox="0 0 306.6 83.8">
<clipPath id="websiteClip">
<path d="M61.3,21.2c2.5,0,4.5,0.4,6,1.1c1.4,0.8,2.5,1.7,3.2,2.9c0.7,1.2,1.2,2.5,1.4,3.9c0.2,1.5,0.3,2.9,0.3,4.4
c0,2.5-0.4,5-1.3,7.6c-0.9,2.6-1.8,5-2.8,7.1c1.3-0.8,2.6-1.8,3.7-3.1c1.1-1.2,2.1-2.5,2.9-3.7c0.8-1.2,1.5-2.2,2-3.1
c0.5-0.9,0.8-1.3,0.9-1.3c0.2-0.1,0.4,0,0.8,0.3c0.3,0.3,0.7,0.6,1,1c0.3,0.4,0.6,0.8,0.8,1.3c0.2,0.4,0.2,0.8,0,1.1
c-0.3,0.6-0.9,1.6-1.6,2.8c-0.7,1.2-1.7,2.5-2.9,3.8c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1.1-3.7,1.9-6.1,2.3
c-1.1,1.7-2.3,3.3-3.7,4.8c-1.4,1.5-2.9,2.8-4.4,3.9c-1.6,1.1-3.2,2-4.9,2.7c-1.7,0.7-3.4,1-5.2,1c-0.7,0-1.6-0.1-2.7-0.4
c-1.1-0.3-2.1-0.8-3.2-1.5c-1-0.7-1.9-1.8-2.6-3.1c-0.7-1.3-1.1-3.1-1.1-5.2c0-1.6,0.2-3.1,0.6-4.8c0.4-1.6,0.9-3.1,1.5-4.5
c0.6-1.4,1.4-2.7,2.3-3.9c0.9-1.2,1.9-2.2,2.9-2.9c-0.4-1.8-0.3-3.7,0.4-5.8c0.7-2.1,1.8-4.1,3.3-5.9c1.5-1.8,3.4-3.3,5.6-4.5
C56.1,21.8,58.6,21.2,61.3,21.2z M49,61.1c2.1,0,4.1-0.7,5.8-2.2c1.7-1.5,3.4-3.3,4.9-5.5c-3.2-0.3-6.5-1.8-9.9-4.3
c-0.6,1.1-1.1,2.3-1.4,3.6c-0.4,1.3-0.6,2.7-0.6,4.2C47.8,59.7,48.2,61.1,49,61.1z M52.5,38c0.8,0.3,1.5,0.6,2,1.1
c0.5,0.4,1,0.9,1.3,1.3c0.3,0.5,0.6,1,0.8,1.5c-0.3,0.2-0.6,0.4-1,0.6c-0.3,0.2-0.6,0.5-1,0.8c-0.4,0.3-0.8,0.7-1.3,1.2
c0.9,1.3,2.1,2.5,3.6,3.4c1.5,1,3.2,1.5,5.2,1.6c1.5-2.7,2.8-5.5,3.8-8.3c1-2.8,1.5-5.3,1.5-7.4c0-0.5,0-1.2,0-2.1
c0-0.9-0.1-1.8-0.3-2.6s-0.5-1.6-0.9-2.2c-0.4-0.6-1-1-1.8-1c-1.4,0-2.8,0.4-4.1,1.1c-1.3,0.8-2.5,1.7-3.5,2.9
c-1,1.2-1.9,2.5-2.7,3.9C53.4,35.3,52.8,36.7,52.5,38z"/>


<path d="M16.1,0.8c4.1,0,8.6,0.4,13.6,1.1c5,0.8,9.9,1.6,14.8,2.5c4.9,0.9,9.6,1.8,14,2.5C62.9,7.7,66.6,8,69.6,8
c3.7,0,7.4-0.5,11-1.5c0.3-0.1,0.6,0.1,0.6,0.6c0.1,0.5,0,1.2-0.3,2c-0.3,0.8-0.8,1.7-1.6,2.7c-0.8,1-1.9,1.9-3.3,2.8
c-1.4,0.9-3.2,1.6-5.4,2.2c-2.2,0.6-4.8,1-7.9,1h-0.6c-3.3,0-6.4-0.3-9.4-0.8c-3-0.5-5.9-1.1-8.8-1.5c-0.5,2.4-1.2,5.5-2.2,9.1
S39.5,32,38.2,36c-1.2,3.9-2.5,7.8-3.8,11.5c-1.3,3.7-2.5,7-3.5,9.7c-1.5,3.9-2.5,7.4-3,10.6c-0.5,3.2-0.9,5.9-1,8.2
c-0.2,2.2-0.4,4-0.6,5.2c-0.2,1.2-0.7,1.8-1.5,1.8c-1.4,0-2.8-0.4-3.9-1.2c-1.2-0.8-2.2-1.8-3.1-3c-0.9-1.2-1.5-2.6-2-4.1
c-0.5-1.5-0.7-3-0.7-4.5c0-2.1,0.3-4.3,0.9-6.7c0.6-2.4,1.4-5,2.4-7.7c1-2.7,2.1-5.6,3.4-8.7c1.3-3,2.5-6.2,3.8-9.5
c1.1-2.8,2.1-5.5,2.9-8.1c0.9-2.6,1.6-5,2.2-7.1c0.6-2.2,1.1-4,1.5-5.5c0.4-1.5,0.7-2.6,0.9-3.3c-3.4-0.6-6.8-1.1-10.1-1.4
c-3.3-0.3-6.7-0.4-10.2-0.4c-1.7,0-3.1,0.1-4.3,0.3c-1.2,0.2-2.2,0.5-3,0.7c-0.8,0.3-1.5,0.5-2.1,0.7c-0.5,0.2-1,0.3-1.3,0.3H1.7
c-0.2-0.1-0.5-0.4-0.7-1c-0.2-0.6-0.3-1.4-0.2-2.4c0.1-1,0.3-2,0.8-3.1C2,6.2,2.7,5.1,3.8,4.2c1.1-1,2.5-1.7,4.3-2.4
c1.8-0.6,4.1-1,6.9-1H16.1z"/>


<path d="M305.7,11.7c-0.6-1.1-1.8-1.7-3.5-1.9c-0.5-0.1-0.9-0.1-1.4-0.1c-0.5,0-0.9,0-1.4-0.1
c-0.1-0.6-0.4-1.2-1-1.8s-1.4-1.2-2.2-1.6c-0.8-0.5-1.6-0.9-2.5-1.2c-0.8-0.3-1.5-0.5-1.9-0.6c-0.4,0-0.7,0.1-0.9,0.4
c-0.2,0.2-0.5,0.8-0.9,1.8c-0.4,1-1,2.3-1.7,3.9c-2.4,0.5-4.7,0.9-6.8,1.3c-2.1,0.4-4.1,0.6-5.8,0.6c-0.3,0-0.5,0-0.8,0
s-0.5,0-0.7-0.1c-1.6-0.2-2.9-0.4-3.8-0.7c-0.9-0.3-1.6-0.4-2-0.4c-0.3,0-0.5,0.2-0.6,0.5c-0.1,0.3-0.1,0.8,0,1.6
c0.1,0.8,0.3,1.5,0.7,2.3c0.4,0.8,1,1.5,1.8,2.2c0.8,0.7,1.8,1.1,3.2,1.2c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0
c1.5,0,3.2-0.2,5.1-0.6c1.9-0.4,3.8-0.8,5.8-1.2c-1.5,3.6-3.2,7.8-5,12.5c-0.8,2-1.6,4.1-2.4,6.3c-0.2,0.3-0.3,0.5-0.5,0.9
c-0.2,0.3-0.4,0.7-0.7,1.2c-0.3,0.4-0.6,0.9-1,1.5c-0.5,0.7-1,1.4-1.6,2.2c-0.5,0.6-1.1,1.4-1.8,2.2c-0.7,0.8-1.5,1.7-2.5,2.6
c-0.3-1-1-1.9-1.9-2.7c-1-0.8-2-1.4-3.2-1.9c-1.2-0.5-2.5-0.9-3.7-1.2c-1.3-0.3-2.4-0.4-3.5-0.4c-0.8,0-1.1-0.3-1.1-1
c0-0.7,0.3-1.5,1-2.5c0.6-1,1.4-2,2.5-3.2c1.1-1.2,2.3-2.2,3.6-3.2c1.3-1,2.7-1.8,4.2-2.5c1.5-0.7,2.9-1,4.3-1
c0.6,0,1.1,0,1.4,0.1c0.3,0.1,0.5,0.2,0.7,0.3c0.2,0.1,0.3,0.2,0.3,0.2c0.1,0.1,0.2,0.1,0.3,0.1c0.2-0.1,0.3-0.4,0.4-1.1
c0.1-0.7-0.1-1.4-0.5-2.2c-0.4-0.8-1.2-1.5-2.2-2.2c-1.1-0.7-2.7-1-4.9-1c-2.2,0-4.5,0.5-6.9,1.6c-2.4,1-4.6,2.4-6.5,4.1
c-2,1.7-3.6,3.6-4.8,5.8c-1,1.8-1.6,3.6-1.7,5.4c-0.4,0.7-0.8,1.3-1.3,2c-0.6,1.2-1.4,2.4-2.2,3.7c-0.9,1.3-1.7,2.6-2.5,3.9
c-1.1,1.7-2.2,3.5-3.4,5.2c-1.2,1.8-2.3,3.3-3.3,4.7c-1,1.4-1.8,2.5-2.5,3.3s-1,1.2-1.1,1.2c-0.1-0.1-0.1-0.7,0.1-1.9
c0.2-1.1,0.5-2.6,1-4.4c0.5-1.8,1.2-3.9,2.1-6.1c0.9-2.3,1.9-4.6,3.1-7c2.4-4.7,4.2-8.3,5.4-10.7c1.2-2.4,1.8-3.8,1.9-4.2
c0.2-0.6,0.1-1.3-0.5-1.9c-0.6-0.7-1.3-1.3-2.2-1.8c-0.9-0.5-1.8-1-2.7-1.4c-1-0.4-1.7-0.6-2.2-0.6c-0.3,0-0.6,0.1-0.9,0.3
c-0.5,0.7-1.6,2.8-3.5,6.4c-1.8,3.6-4.4,8.9-7.5,15.9c-1.6,3.3-2.6,6.4-3,9.2c-0.5,2.8-0.5,5.2,0,7.2c0.4,2,1.2,3.6,2.4,4.8
c1.2,1.2,2.6,1.7,4.4,1.7c1.2,0,2.5-0.6,4-1.9c1.5-1.3,3.1-2.9,4.7-4.8c0.6-0.7,1.2-1.5,1.7-2.3c0.1,0.5,0.2,1.1,0.4,1.8
c0.3,1,0.9,2,1.7,2.9c0.8,0.9,1.9,1.7,3.2,2.3c1.4,0.6,3.1,1,5.2,1c2.8,0,5.2-0.5,7.4-1.4c2.2-0.9,4.1-2.1,5.7-3.5
c1.6-1.4,2.9-2.9,4-4.6c1-1.7,1.8-3.3,2.3-4.8c1.2-0.6,2.4-1.3,3.4-2.2c-0.5,1.8-0.9,3.5-1.1,5c-0.5,2.9-0.5,5.2-0.1,7.1
c0.4,1.8,1.2,3.2,2.4,4c1.2,0.8,2.6,1.3,4.4,1.3c2.1,0,4.5-1.4,7-4.3c2.6-2.9,5.8-7.2,9.6-13c1.7-2.5,3.1-4.8,4.2-6.7
c1.1-2,1.7-3.1,1.9-3.5c0.3-0.5,0.3-0.9,0-1.3s-0.6-0.8-1-1.2c-0.5-0.3-1-0.7-1.7-1c-0.7,1.2-1.4,2.5-2.2,3.7
c-0.6,1.1-1.4,2.3-2.2,3.6c-0.8,1.3-1.7,2.6-2.6,3.9c-2,3-3.7,5.5-5.1,7.4c-1.4,1.9-2.5,3.4-3.3,4.5c-0.8,1.1-1.4,1.8-1.8,2.2
c-0.4,0.4-0.6,0.5-0.6,0.5c-0.1-0.1,0-0.8,0.3-2.2c0.3-1.4,0.7-3.1,1.3-5.2c0.6-2.1,1.3-4.4,2.1-7c0.8-2.6,1.8-5.1,2.8-7.6
c1.9-4.7,3.7-9,5.3-13.1s3-7.5,4.1-10.3c2.4,0.4,4.2,0.9,5.2,1.4c1.1,0.5,1.9,0.9,2.6,1.2c0.3,0.2,0.7-0.2,1.2-1.1
c0.4-0.9,0.7-2,0.7-3.2C306.6,13.9,306.3,12.8,305.7,11.7z M255,57c-0.6,0.8-1.3,1.5-2,2.2c-0.7,0.6-1.5,1.1-2.3,1.5
c-0.8,0.4-1.6,0.6-2.5,0.6c-0.6,0-1.1-0.2-1.3-0.7c-0.2-0.5-0.3-0.8-0.3-1v-0.7c0.2-0.8,0.7-1.6,1.3-2.2c0.5-0.5,1.3-1,2.3-1.5
c1-0.5,2.5-0.7,4.2-0.7c0.3,0,0.6,0,0.9,0c0.3,0,0.6,0,0.9,0.1h0.5C256.2,55.4,255.6,56.2,255,57z M259.2,48.8
c-0.1,0.3-0.2,0.7-0.3,1.2c-0.8-0.1-1.6-0.1-2.4-0.2c-0.8-0.1-1.6-0.1-2.5-0.1c-0.9,0-1.8,0-2.9,0.1c-1.1,0.1-2.1,0.3-3.2,0.5
c-1,0.2-2,0.6-2.9,0.9c0.8-1.2,1.5-2.3,2.1-3.4c1.1-1.7,2-3.2,2.7-4.5c0.5,0.4,1,0.7,1.6,1c1,0.4,1.9,0.7,2.9,0.9
c1,0.2,1.7,0.3,2.2,0.3c1,0,1.8,0.2,2.2,0.6s0.6,1.1,0.6,1.9C259.3,48.2,259.2,48.5,259.2,48.8z"/>


<path d="M209.5,70c-0.5,1.2-1.1,2.6-2,4.2s-1.9,3-3.1,4.4c-1.2,1.4-2.6,2.6-4.3,3.5c-1.6,1-3.5,1.4-5.5,1.4
c-2.4,0-4.3-0.4-5.9-1.1c-1.6-0.7-2.9-1.6-3.8-2.6c-1-1-1.6-2.1-2-3.3c-0.4-1.2-0.6-2.3-0.6-3.2c0-2.6,0.5-4.8,1.4-6.5
c1-1.7,2.2-3.1,3.7-4.2c1.5-1,3.2-1.8,5.1-2.2c1.9-0.5,3.7-0.7,5.6-0.7c0.6,0,1.1,0,1.7,0c0.5,0,1.1,0.1,1.7,0.1
c0.6-1.5,1.4-3.4,2.3-5.7c1-2.3,2.1-4.8,3.2-7.5c1.2-2.7,2.4-5.4,3.7-8.3c1.3-2.8,2.5-5.5,3.7-8c1.2-2.5,2.3-4.8,3.2-6.9
c1-2.1,1.8-3.7,2.3-4.8c-0.6,0.5-1.4,1.3-2.2,2.4c-0.9,1.1-1.8,2.3-2.9,3.6c-1.1,1.3-2.3,2.7-3.6,4.1c-1.3,1.4-2.7,2.7-4.2,3.8
c-1.5,1.2-3.1,2.1-4.7,2.8c-1.6,0.7-3.4,1.1-5.1,1.1c-0.8,0-1.7-0.1-2.8-0.4c-1.1-0.3-2.2-0.8-3.3-1.5c-1.1-0.7-2-1.6-2.7-2.8
c-0.8-1.2-1.1-2.6-1.1-4.2c0-1.8,0.2-3.1,0.7-3.8c0.5-0.7,0.9-1,1.2-1c0.1,0,0.3,0.2,0.5,0.5c0.2,0.3,0.6,0.7,1.2,1.1
c0.5,0.4,1.3,0.8,2.3,1.1c1,0.3,2.4,0.5,4.1,0.5c1.9,0,4-0.6,6.2-1.9c2.2-1.2,4.5-2.8,6.8-4.6c2.3-1.8,4.5-3.8,6.7-6
c2.2-2.2,4.1-4.2,5.9-6c1.8-1.8,3.2-3.4,4.4-4.6c1.2-1.2,1.9-1.9,2.3-1.9c0.5,0,1.1,0.2,2,0.5c0.9,0.3,1.8,0.8,2.7,1.4
c0.9,0.6,1.7,1.2,2.3,1.9c0.7,0.7,1,1.4,1,2.1c-1,2-2.2,4.2-3.4,6.5c-1,2-2.1,4.3-3.4,6.9c-1.3,2.6-2.6,5.4-3.9,8.3
c-1.4,3.2-2.8,6.3-4.2,9.5c-1.4,3.2-2.7,6.2-3.9,9.2c-1.2,2.9-2.4,5.7-3.5,8.3c-1.1,2.6-2,5-2.9,7c2.5,0.9,4.9,2,7.2,3.2
s4.4,2.4,6.6,3.5c2.1,1.1,4.3,2,6.4,2.8c2.1,0.7,4.3,1.1,6.4,1.1c2.6,0,4.8-0.2,6.5-0.5c1.7-0.3,3.1-0.6,4.2-1
c1.1-0.3,1.9-0.7,2.5-1c0.6-0.3,1-0.5,1.4-0.5c0.4,0,0.8,0.3,1.2,0.8c0.4,0.5,0.6,1.4,0.6,2.5c0,0.5-0.3,1.3-0.8,2.6
c-0.5,1.2-1.4,2.5-2.7,3.8c-1.2,1.3-2.9,2.4-4.9,3.4c-2,1-4.6,1.5-7.6,1.5c-2.1,0-4.3-0.5-6.6-1.5c-2.3-1-4.7-2.2-7.2-3.7
s-5.1-3.1-7.7-4.8C215.1,73,212.3,71.4,209.5,70z M190.3,76.3c0.6,0,1.3-0.3,2-0.9s1.4-1.4,2-2.3c0.7-1,1.3-2,1.9-3.2
c0.6-1.2,1.2-2.3,1.8-3.5h-1c-1.8,0-3.5,0.5-4.9,1.6c-1.4,1-2.5,2.2-3.3,3.4c-0.8,1.2-1,2.3-0.9,3.4
C188.2,75.8,189,76.3,190.3,76.3z"/>


<path d="M170.7,39.6c-0.2-0.4-0.5-0.8-0.8-1.3c-0.3-0.4-0.6-0.7-1-1c-0.3-0.3-0.6-0.4-0.8-0.3
c-0.1,0-0.3,0.4-0.9,1.3c-0.5,0.9-1.2,1.9-2,3.1c-0.8,1.2-1.8,2.4-2.9,3.7c-1.1,1.2-2.4,2.3-3.7,3.1c1-2.1,1.9-4.5,2.8-7.1
c0.9-2.6,1.3-5.1,1.3-7.6c0-1.4-0.1-2.9-0.3-4.4c-0.2-1.5-0.7-2.8-1.4-3.9c-0.7-1.2-1.8-2.1-3.2-2.9c-1.4-0.7-3.4-1.1-6-1.1
c-2.7,0-5.2,0.6-7.4,1.8s-4.1,2.7-5.6,4.5c-1.5,1.8-2.6,3.8-3.3,5.9c-0.4,1.2-0.6,2.4-0.6,3.5c-0.7,1.2-1.5,2.4-2.3,3.7
c-0.7,1.1-1.5,2.3-2.3,3.6c-0.9,1.3-1.7,2.6-2.5,3.8c-1.2,1.7-2.3,3.4-3.5,5.1c-1.2,1.6-2.2,3.1-3.2,4.3s-1.7,2.2-2.4,3
c-0.6,0.8-1,1.1-1,1c-0.1-0.1,0-0.7,0.3-1.9c0.3-1.2,0.7-2.9,1.3-5c0.6-2.1,1.4-4.6,2.3-7.4c1-2.8,2.1-5.8,3.5-9
c1.6-3.5,3.1-6.8,4.5-9.8c1.4-3,2.8-5.7,3.9-8c1.2-2.3,2.2-4.2,2.9-5.7c0.8-1.5,1.3-2.4,1.5-2.8c0.2-0.4,0.1-1-0.3-1.7
c-0.4-0.7-1-1.5-1.6-2.2c-0.7-0.7-1.5-1.4-2.3-1.9c-0.8-0.5-1.6-0.8-2.2-0.8c-0.5,0-0.9,0.2-1.1,0.6c-0.2,0.2-0.6,1-1.2,2.2
c-0.6,1.3-1.3,2.9-2.2,4.8c-0.9,2-1.8,4.2-2.9,6.6c-1.1,2.5-2.2,5-3.5,7.7c-0.3-1.6-1-2.9-2-4c-1.1-1.1-2.8-1.7-5.2-1.7
c-2.1,0-4.2,0.6-6.1,1.9c-2,1.3-3.8,2.9-5.5,5c-1.7,2.1-3.2,4.4-4.6,7c-1.4,2.6-2.6,5.3-3.5,8.1c-1,2.8-1.7,5.5-2.2,8.1
c-0.5,2.6-0.6,5-0.6,7c0.1,2.1,0.5,3.7,1.3,5c0.7,1.3,1.9,1.9,3.4,1.9c1,0,2.1-0.3,3.3-1c1.2-0.7,2.3-1.6,3.5-2.6
c1.2-1.1,2.4-2.3,3.5-3.6c1.2-1.4,2.2-2.7,3.2-4c-0.9,4-0.7,7.1,0.5,9.3c1.2,2.2,3.2,3.3,5.9,3.3c1.2,0,2.6-0.6,4.1-1.8
c1.5-1.2,3.1-2.8,4.7-4.6c1.3-1.5,2.5-3.1,3.7-4.7c0,2,0.4,3.7,1.1,4.9c0.7,1.3,1.6,2.4,2.6,3.1c1,0.8,2.1,1.3,3.2,1.5
c1.1,0.3,2,0.4,2.7,0.4c1.8,0,3.5-0.3,5.2-1c1.7-0.7,3.3-1.6,4.9-2.7c1.6-1.1,3-2.4,4.4-3.9c1.4-1.5,2.6-3.1,3.7-4.8
c2.4-0.4,4.4-1.2,6.1-2.3c1.7-1.1,3.2-2.3,4.4-3.6c1.2-1.3,2.2-2.6,2.9-3.8c0.7-1.2,1.3-2.2,1.6-2.8C171,40.4,170.9,40,170.7,39.6
z M117.4,34.5c-1,2-1.9,4-2.8,5.9c-0.9,1.9-1.7,3.7-2.5,5.3c-0.2,0.5-0.4,1-0.7,1.5c-0.8,1-1.8,2.1-2.9,3.4
c-1.1,1.3-2.2,2.5-3.3,3.6c-1.1,1.1-2.1,2.1-3,2.9c-0.9,0.8-1.6,1.2-2,1.2c-0.5,0-0.6-0.7-0.4-2.2c0.3-1.5,0.8-3.4,1.6-5.6
c0.8-2.2,1.9-4.7,3.1-7.4s2.5-5.1,3.9-7.4c1.4-2.2,2.8-4.1,4.1-5.6c1.4-1.5,2.6-2.2,3.7-2.2c0.5,0,0.8,0.2,1,0.6
c0.2,0.4,0.4,0.9,0.4,1.5c0.1,0.6,0,1.4,0,2.2C117.6,32.9,117.5,33.7,117.4,34.5z M145.4,58.9c-1.7,1.5-3.7,2.2-5.8,2.2
c-0.8,0-1.2-1.4-1.2-4.2c0-1.5,0.2-2.9,0.6-4.2c0.4-1.3,0.8-2.5,1.4-3.6c3.4,2.5,6.7,4,9.9,4.3C148.8,55.6,147.2,57.5,145.4,58.9z
M158,33.9c0,2.1-0.5,4.5-1.5,7.4c-1,2.8-2.3,5.6-3.8,8.3c-2-0.1-3.8-0.6-5.2-1.6c-1.5-1-2.7-2.1-3.6-3.4c0.5-0.5,0.9-0.8,1.3-1.2
c0.4-0.3,0.7-0.6,1-0.8c0.3-0.2,0.7-0.4,1-0.6c-0.2-0.5-0.4-1-0.8-1.5c-0.3-0.5-0.7-0.9-1.3-1.3c-0.5-0.4-1.2-0.8-2-1.1
c0.3-1.4,0.9-2.8,1.6-4.2c0.7-1.4,1.6-2.7,2.7-3.9c1-1.2,2.2-2.1,3.5-2.9c1.3-0.7,2.7-1.1,4.1-1.1c0.8,0,1.4,0.3,1.8,1
c0.4,0.6,0.7,1.4,0.9,2.2s0.3,1.7,0.3,2.6C158,32.7,158,33.4,158,33.9z"/>

<path d="M237.6,22c0.5,0.1,1.3,0.3,2.2,0.6c1,0.4,1.9,0.8,2.7,1.4c0.9,0.5,1.6,1.2,2.2,1.8
   c0.6,0.7,0.7,1.3,0.5,1.9c-0.1,0.4-0.8,1.8-1.9,4.2c-1.2,2.4-2.9,6-5.4,10.7c-1.2,2.4-2.2,4.8-3.1,7c-0.9,2.3-1.6,4.3-2.1,6.1
   c-0.5,1.8-0.9,3.3-1,4.4c-0.2,1.1-0.2,1.7-0.1,1.9c0.1,0.1,0.4-0.3,1.1-1.2s1.5-1.9,2.5-3.3c1-1.4,2.1-3,3.3-4.7
   c1.2-1.8,2.3-3.5,3.4-5.2c0.8-1.3,1.6-2.6,2.5-3.9c0.9-1.3,1.6-2.5,2.2-3.7c0.8-1.3,1.6-2.5,2.3-3.7c0.7,0.3,1.3,0.7,1.7,1.1
   c0.5,0.3,0.8,0.6,1.1,1.1c0.3,0.4,0.2,0.9,0,1.3c-0.2,0.3-0.7,1.2-1.5,2.7c-0.8,1.5-1.9,3.3-3.2,5.3c-1.3,2-2.7,4.2-4.2,6.5
   c-1.6,2.3-3.1,4.4-4.7,6.4c-1.6,2-3.1,3.6-4.7,4.8c-1.5,1.3-2.9,1.9-4,1.9c-1.7,0-3.2-0.6-4.4-1.7c-1.2-1.2-2-2.7-2.4-4.8
   c-0.4-2-0.4-4.4,0-7.2c0.5-2.8,1.5-5.9,3-9.2c3.2-7,5.7-12.3,7.5-15.9c1.8-3.6,3-5.8,3.5-6.4C236.9,22.1,237.2,22,237.6,22z
    M242.2,14.9c-0.1-0.6,0-1.5,0.5-2.5c0.4-1,1-2,1.6-3.1c0.6-1.2,1.4-2.4,2.3-3.7c0.6-0.7,1.3-1.1,2.1-1.1c0.5,0,1.3,0.1,2.2,0.4
   c0.5,0.2,1.1,0.4,1.8,0.8c0.7,0.4,1.3,0.8,1.8,1.3c0.5,0.5,0.9,0.9,1.2,1.3c0.3,0.4,0.3,0.8,0,1.1c-0.9,1.3-1.7,2.4-2.3,3.3
   c-0.6,0.9-1.1,1.7-1.6,2.4c-0.5,0.7-0.9,1.3-1.3,1.9c-0.4,0.6-0.9,1.2-1.4,1.8c-0.2,0.3-0.6,0.5-1.2,0.5c-0.5,0-1.1-0.1-1.7-0.4
   c-0.6-0.3-1.2-0.6-1.8-1.1c-0.6-0.4-1.1-0.9-1.4-1.5C242.5,15.9,242.3,15.4,242.2,14.9z"/>

   <path d="M285.6,17.3c-2,0.4-4,0.8-5.8,1.2c-1.9,0.4-3.6,0.6-5.1,0.6c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0
   c-1.3-0.1-2.4-0.5-3.2-1.2c-0.8-0.7-1.4-1.4-1.8-2.2c-0.4-0.8-0.6-1.6-0.7-2.3c-0.1-0.7-0.1-1.3,0-1.6c0.1-0.3,0.3-0.5,0.6-0.5
   c0.4,0,1.1,0.1,2,0.4c0.9,0.3,2.2,0.5,3.8,0.7c0.2,0.1,0.5,0.1,0.7,0.1s0.5,0,0.8,0c1.7,0,3.7-0.2,5.8-0.6
   c2.1-0.4,4.4-0.8,6.8-1.3c0.7-1.6,1.3-2.9,1.7-3.9c0.4-1,0.7-1.6,0.9-1.8c0.2-0.3,0.5-0.4,0.9-0.4c0.5,0.1,1.1,0.2,1.9,0.6
   c0.8,0.3,1.7,0.7,2.5,1.2c0.8,0.5,1.5,1,2.2,1.6s1,1.2,1,1.8c0.5,0.1,0.9,0.1,1.4,0.1c0.5,0,0.9,0,1.4,0.1
   c1.7,0.2,2.9,0.8,3.5,1.9c0.6,1.1,0.9,2.2,0.9,3.4c0,1.2-0.3,2.2-0.7,3.2c-0.4,0.9-0.8,1.3-1.2,1.1c-0.7-0.3-1.6-0.7-2.6-1.2
   c-1.1-0.5-2.8-1-5.2-1.4c-1.1,2.8-2.5,6.2-4.1,10.3s-3.4,8.4-5.3,13.1c-1,2.5-2,5-2.8,7.6c-0.8,2.6-1.5,4.9-2.1,7
   c-0.6,2.1-1,3.8-1.3,5.2c-0.3,1.4-0.4,2.1-0.3,2.2c0.1,0.1,0.3-0.1,0.6-0.5c0.4-0.4,1-1.1,1.8-2.2c0.8-1.1,1.9-2.6,3.3-4.5
   c1.4-1.9,3-4.4,5.1-7.4c0.9-1.3,1.7-2.6,2.6-3.9c0.8-1.3,1.6-2.5,2.2-3.6c0.8-1.3,1.6-2.5,2.2-3.7c0.7,0.3,1.3,0.7,1.7,1
   c0.4,0.3,0.7,0.7,1,1.2s0.2,0.9,0,1.3c-0.2,0.3-0.8,1.5-1.9,3.5c-1.1,2-2.5,4.2-4.2,6.7c-3.8,5.8-7,10.2-9.6,13
   c-2.6,2.9-4.9,4.3-7,4.3c-1.7,0-3.2-0.4-4.4-1.3c-1.2-0.8-2-2.2-2.4-4c-0.4-1.8-0.4-4.2,0.1-7.1c0.5-2.9,1.4-6.4,2.9-10.5
   c1.9-5.2,3.8-10.1,5.6-14.8C282.4,25.1,284.1,21,285.6,17.3z"/>

</clipPath>
<path id="st0" className={animation.st0} d="M52.5,39.9c2.5-3-18.2,13.8-9,23c14,14,34.4-39,23-39c-33,0-15.9,52.7,13,14"/>
<path  id="st1" className={animation.st1} d="M0.5,12.9c0,0,7-16,41-4S79,2.4,79,2.4L61.2-6.4C53.8-11.3,47.6-8,45,0.4L23.5,58.9c0,0-5,9,1,24"/>
<path  id="st2" className={animation.st2} d="M241.5,23.3c-4.6,0.4-31.9,80.8,7.5,14.8c13.5-21.8,26.5-10.8,26.5-10.8s-18-8-23,14c11,4,15,5,15,5
s-4,18-19,18c-7,0-6.2-7.9-3-11c6.2-6,23.3,0.7,35.9-15.6c13.6-17.6,14.4-39,13.1-32.4c-0.5,2.5-21,54.2-15.9,60.3
c7,7,20.9-28.3,20.9-28.3"/>
<path  id="st3" className={animation.st3} d="M188.5,22.9c0,0,4,27,43-22s-8.2,11.4-24,60c-4.6,13.2-9.4,19.6-15,21c-9.5,2.3-14.3-11.9-5-15
c1.6-0.5,5.5-11.8,22-2c10,5,27.5,20.5,42.5,10.5"/>
<path  id="st4" className={animation.st4} d="M120.5,32.9c0,0-7.7-26.9-24,18.1c-0.9,2.5-1.4,5.1-1.4,7.7c-0.2,23.3,40.4-45.8,40.4-45.8s-2-9-4-3
S103.8,54,115.4,65.6c6.1,6.1,12.1-20.8,28.1-25.8c3-0.9-5.7,0.4-8,4c-8.3,12.9-3.2,35.4,19,8c10-17.1,5.2-24,1.7-26.6
c-1.6-1.1-3.6-1.5-5.5-1.1c-3.3,0.8-12.2,6.8-11.2,13.7c2.3,16.5,24,17,30,0"/>
<path  id="st5" className={animation.st5} d="M251.5,7.3c-3.4,4-3,4-5,8"/>
<path  id="st6" className={animation.st6} d="M270.5,14.3c0,0,2,1,8,1s16-6,27,0"/>

</svg> 
</div>
)
}
}

export default AnimeToDoList;