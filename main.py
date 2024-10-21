

def json_format(html_text):
    html_text = html_text.replace("\n", "\\n")
    return html_text


text = """<h1>Title</h1>

<p>main paragraph</p>

<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
<b>bold text</b>"""
print(json_format(text))
