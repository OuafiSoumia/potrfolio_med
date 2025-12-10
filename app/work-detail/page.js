'use client'
import { useEffect } from "react";
import WorkDetail from "../../components/WorkDetail";

export default function WorkDetailPage(isDarkMode) {
   useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
 },[isDarkMode])
  return <WorkDetail isDarkMode={isDarkMode}/>;
}
