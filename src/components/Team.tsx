import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const people = [
  {
    name: "Roziisho",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/e_background_removal/b_rgb:333B4C/f_png,e_improve,e_sharpen/v1716322099/profile_qste9r.png",
    description:
      "The visionary force behind our company, Roziisho, leads with innovation and unwavering dedication. His strategic thinking and passion for excellence drive our team towards groundbreaking achievements and continuous growth.",
  },
  {
    name: "Fayeem Afzal",
    role: "Filmmaker / Producer  / Colorist",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716399526/Screenshot_2024-05-22_at_10.37.45_PM_lbjvwb.png",
    description:
      "Fayeem is a master storyteller with a keen eye for detail. His expertise in filmmaking, production, and color grading ensures that every project he touches is a cinematic masterpiece, captivating audiences and evoking deep emotions.",
  },
  {
    name: "Sohail Rumi",
    role: "Music Producer / Sound Designer",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716399816/Screenshot_2024-05-22_at_10.42.41_PM_dvtvyh.png",
    description:
      "Sohail is the auditory genius of our team. With a talent for creating immersive soundscapes, he elevates each project to new heights of auditory excellence, ensuring that every note and beat resonates perfectly with our audience.",
  },
  {
    name: "Naveed Roy",
    role: "Photographer / Editor",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716398417/Screenshot_2024-05-22_at_10.19.39_PM_veltyt.png",
    description:
      "Naveed captures the essence of moments through his lens, transforming them into visual art. His skillful editing enhances each photograph, making sure that the final product is not just seen, but felt.",
  },
  {
    name: "Mazuz Shah",
    role: "Cinematographer / Music Producer",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716397792/Screenshot_2024-05-22_at_10.09.29_PM_xwjkuy.png",
    description:
      "Mazuz blends his talents in cinematography and music production to create content that is both visually stunning and emotionally powerful. His work is a testament to the seamless integration of sight and sound.",
  },

  {
    name: "Ghulam Mustafa",
    role: "Video Editor / 3D Designer",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716398545/Screenshot_2024-05-22_at_10.22.03_PM_c94tyk.png",
    description:
      "Mustafa brings stories to life with his exceptional video editing and 3D design skills. His innovative approach pushes the boundaries of visual creativity, making every project he works on a true spectacle.",
  },
  {
    name: "Wajahat Ghazi",
    role: "Graphic Designer",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716398016/Screenshot_2024-05-22_at_10.13.14_PM_dcgawm.png",
    description:
      "Wajahat's designs are a perfect fusion of creativity and strategic thinking. His visuals communicate powerful messages, ensuring that our brand's identity is both strong and memorable.",
  },

  {
    name: "Tanveer Hussain",
    role: "Full-Stack Web Developer",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/e_improve,e_sharpen/v1716398220/Screenshot_2024-05-22_at_10.16.18_PM_heey5a.png",
    description:
      "Tanveer is the architect of our digital presence. His expertise in full-stack development ensures that our online platforms are not only innovative and user-friendly but also robust and secure",
  },
  {
    name: "Naveed Hassan",
    role: "Architect",
    imageUrl:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/b_rgb:333B4C/v1716394134/Screenshot_2024-05-22_at_9.07.41_PM_xycsd4.png",
    description:
      "Naveed Hassan is the architectural visionary of our team, blending creativity with precision to design spaces that are both functional and inspiring. With a keen eye for detail and a deep understanding of structural dynamics, Naveed brings a unique perspective to every project. His innovative designs not only meet the needs of our clients but also push the boundaries of modern architecture.",
  },

  // More people...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 mt-10 font-sans">
      <div className="mx-auto grid  max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our <br />
            Team
          </h2>
          <p className="mt-6  text-lg leading-8 text-gray-600">
            Welcome to our vibrant and dynamic company, where innovation,
            creativity, and expertise converge to bring extraordinary visions to
            life. Our team is a diverse group of talented professionals, each
            with a unique skill set and a shared passion for excellence.
            Together, we create impactful and memorable experiences across
            various media and platforms.
          </p>
        </div>
        <ul
          role="list"
          className="grid  gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <HoverCard>
                    <HoverCardTrigger className="text-blue-500">
                      More...
                    </HoverCardTrigger>
                    <HoverCardContent>{person.description}</HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
