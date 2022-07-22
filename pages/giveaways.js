import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
    () => import('../components/mint_page_giveaway.jsx'),
    { loading: () => <p>...</p> }
  )
function Home() {
  return (
    <div>
      <DynamicComponentWithCustomLoading />
    </div>
  )
}

export default Home