export const stagger = {
  show: {
    transition: {
      staggerChildren: 0.04
    }
  }
}

export const headlineAnimate = {
  hidden: {
    x: '-100%',
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.65
    }
  },
  show: {
    x: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.55
    }
  }
}

export const wordAnmate = {
  hidden: {
    y: '200%',
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.65
    }
  },
  show: {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.55
    }
  }
}
