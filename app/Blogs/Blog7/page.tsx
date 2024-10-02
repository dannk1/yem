import React from "react"
import BlogCard from "@/components/BlogCard"
import { Card } from "@/components/ui/card"

const blogPosts = [
  {
    imageSrc: "https://picsum.photos/200/200?random=1",
    topic: "MUSIC",
    title: "Coffee sugar, chicory seasonal espresso barista americano",
    date: "2016.03.17",
    description: "Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings."
  },
  {
    imageSrc: "https://picsum.photos/200/200?random=2",
    topic: "TECH",
    title: "Overlaid the jeepers uselessly much excluding",
    date: "2016.03.17",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    imageSrc: "https://picsum.photos/200/200?random=3",
    topic: "MUSIC",
    title: "According a funnily until pre-set or arrogant well cheerful",
    date: "2016.03.17",
    description: "Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated."
  }
]

const Page = () => {
  return (
    <div className="mt-4 mx-auto max-w-4xl font-roboto">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-[#585858] text-3xl font-semibold mb-4">
          This is Phantom, a free, fully responsive site template designed by HTML5 UP.
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
        </p>
      </div>
      <Card className="p-6 bg-gray-200">
        <div className="">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Page