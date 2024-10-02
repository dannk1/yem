from PIL import Image

with Image.open(r"./assets/bg.png") as img:
    resized_img = img.resize((1920, 1080))

    resized_img.save(r"./assets/bg_resized.png")