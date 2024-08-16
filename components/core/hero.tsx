import Image from "next/image"

export default function Hero() {
    return (
        <div className="flex flex-row p-16">
            <div className="flex flex-col w-1/2 items-center">
                <h1 className="mb-10">Header example</h1>
                <p className="text-blue">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur vitae diam non enim vestibulum interdum. Mauris elementum mauris vitae tortor. Proin in tellus sit amet nibh dignissim sagittis. Pellentesque ipsum. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Aenean vel massa quis mauris vehicula lacinia. Duis condimentum augue id magna semper rutrum. Donec iaculis gravida nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. Nulla est. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Aenean fermentum risus id tortor. Donec iaculis gravida nulla. Maecenas lorem. Nullam rhoncus aliquam metus. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
                </p>
            </div>
            <div className="flex w-1/2 items-center justify-center">
                <Image src="/mac.png" alt="Macbook" width={300} height={300}/>
            </div>
        </div>
    )
} 