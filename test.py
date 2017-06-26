testArray = [
            {"name": "kristof", "hair": "red", "eye": "black", "dog": "spok", "cat": "ket"},
            {"name": "attila", "hair": "blue", "eye": "blue"},
            {"name": "peti", "hair": "pink", "eye": "grey", "dog": "asdf", "cat": "qwerí"}
            ]
list_of_key = ["name", "hair", "eye", "dog", "cat"]
dom_string = ""

for k in range(len(testArray)):
    # {"name": "kristof", "hair": "red", "eye": "black"}
    dom_string += ("<tr>")
    for x in range(len(list_of_key)):
        key = list_of_key[x]
        print(key)
        dom_string += ("<td>")
        dom_string += (testArray[k].get(key, ""))
        dom_string += ("</td>")
    dom_string += ("</tr>")
print(dom_string)