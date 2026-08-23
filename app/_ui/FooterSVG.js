import React from 'react'

export default function FooterSVG() {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1106 188"
        className="w-full h-auto block"
        preserveAspectRatio="none">
  <defs>
    <linearGradient id="base" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#b97858"/>
      <stop offset="0.42" stopColor="#b97858"/>
      <stop offset="0.72" stopColor="#b97858"/>
      <stop offset="1" stopColor="#b97858"/>
    </linearGradient>

    <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#d7a98c" stopOpacity=".72"/>
      <stop offset=".48" stopColor="#b7a55d" stopOpacity=".58"/>
      <stop offset="1" stopColor="#b4ce79" stopOpacity=".62"/>
    </linearGradient>

    <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#9d684c" stopOpacity=".62"/>
      <stop offset=".45" stopColor="#9d684c" stopOpacity=".55"/>
      <stop offset="1" stopColor="#9d684c" stopOpacity=".52"/>
    </linearGradient>
  </defs>

  <path fill="url(#base)" d="
    M0 58
    C150 18 290 32 430 67
    C565 100 650 64 760 38
    C890 7 1015 37 1106 69
    L1106 188
    L0 188 Z"/>

  <path fill="url(#wave1)" d="
    M0 57
    C150 18 285 30 425 64
    C565 98 655 62 760 37
    C890 7 1015 37 1106 68
    L1106 96
    C970 48 850 35 735 57
    C610 80 535 121 400 105
    C245 87 145 61 0 92 Z"/>

  <path fill="url(#wave2)" d="
    M0 73
    C125 116 225 139 350 108
    C475 77 570 39 695 42
    C825 45 935 76 1106 49
    L1106 188
    L0 188 Z"/>

  <path fill="#8f624d" opacity=".22" d="
    M0 137
    C135 126 260 145 390 135
    C535 124 620 87 750 83
    C890 79 1000 106 1106 91
    L1106 188
    L0 188 Z"/>
</svg></>
  )
}
