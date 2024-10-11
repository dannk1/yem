from PIL import Image

with Image.open(r"Young-Engineers/public/favicon.png") as img:
    resized_img = img.resize((32, 32))

    resized_img.save(r"Young-Engineers/public/favicon.png")