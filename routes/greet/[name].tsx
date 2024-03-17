import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {

  const { name } = props.params;

  return (
    <main>
      <h1>Geetings to you, {name}</h1>
    </main>
  )
}