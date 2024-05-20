import os

def get_image_names(folder_path):
    image_names = []
    for file_name in sorted(os.listdir(folder_path), key=lambda x: os.path.getmtime(os.path.join(folder_path, x))):
        if file_name.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            image_names.append(file_name)
    return image_names

folder_path = '/Users/shazmomin/Documents/projects/grad24pics/src/assets'
image_names = get_image_names(folder_path)
print(image_names)
