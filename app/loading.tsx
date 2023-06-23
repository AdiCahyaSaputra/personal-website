import Container, { container } from '@/components/reusable/global/Container'

const Loading = () => {
  return (
    <Container className={container({ size: 'large' })}>
      <div className='h-screen flex justify-center items-center'>
        <h1 className='text-foreground font-bold'>Loading...</h1>
      </div>
    </Container>
  )
}

export default Loading
