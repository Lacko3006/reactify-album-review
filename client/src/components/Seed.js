import { useMutation } from "@apollo/client";
import { useState } from "react";
import { SEED } from "../apollo/mutations";

const Seed = () => {
  const [seed] = useMutation(SEED)
  const [disabled, setDisabled] = useState(false)

  const onClick = async () => {
    setDisabled(true)
    await seed()
    window.location.assign('/');
  }

  return (
    <section className="wrapper">
      <button disabled={disabled} type="button" onClick={onClick}>Seed?</button>
    </section>
  )
}

export default Seed