
import { Card, Chip, Button } from "@heroui/react";
import { Heart, Download, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const PhotoCard = ({ item }) => {
    return (
        <Card className="w-full gap-0 overflow-hidden border border-default-200 shadow-sm hover:shadow-lg transition-all duration-300">

            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={item.imageUrl}
                    width={300}
                    height={300}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <Chip
                    color="primary"
                    variant="flat"
                    size="sm"
                    className="absolute top-3 left-3"
                >
                    {item.category}
                </Chip>
            </div>

            {/* Card Header */}
            <Card.Header className="px-4 pt-4 pb-2">
                <div className="flex flex-col gap-1">
                    <Card.Title className="text-lg font-semibold line-clamp-1">
                        {item.title}
                    </Card.Title>

                    <Card.Description>
                        {item.model} · {item.resolution}
                    </Card.Description>
                </div>
            </Card.Header>

            {/* Card Footer */}
            <Card.Footer className="flex flex-col items-stretch gap-3 px-4 pb-4">

                <div className="flex items-center gap-5 text-sm text-default-500">
                    <div className="flex items-center gap-1.5">
                        <Heart size={16} />
                        <span>{item.likes}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Download size={16} />
                        <span>{item.downloads}</span>
                    </div>
                </div>

                <Button
                    color="primary"
                    className="w-full font-medium"
                    endContent={<ArrowUpRight size={17} />}
                >
                    View Details
                </Button>

            </Card.Footer>
        </Card>
    );
};

export default PhotoCard;
