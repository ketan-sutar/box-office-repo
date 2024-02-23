import { useStarredShow } from "../lib/useStarredShow";

const Starred = () => {
  const [starredShow] = useStarredShow()


  return (
    <div>

      starred page, starred {starredShow.length}
    </div>
  )
}

export default Starred;
