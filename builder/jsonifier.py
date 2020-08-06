"""
This script is part of the SLID (Super Lightweight Information Database) build
process. It must be run from the SLID root directory.

When run, this will run through all YAML files in the "info" directory and
append each entry to src/misc/info.json, which is read by the scripts of the
website. Each separate YAML file will be treated as a different category and
will have its own card background colour, text colour, title colour, etc.

In style.py, there should be a dict entry for each YAML file in info/
specifying these display settings.

Note that running this script replaces the current JSON file.
"""

# Pre-req packages
import yaml, json, os, sys, copy

# Style file
from style import style as colours

source_dir, output_file = sys.argv[1], sys.argv[2]

out = []
id_count = 1

for filename in os.listdir(source_dir):
    if filename.endswith(".yml") or filename.endswith(".yaml"):

        source = os.path.join(source_dir, filename)
        tag = ".".join(filename.split(".")[:-1])

        with open(source, "r") as file:

            content = yaml.load(file, Loader=yaml.FullLoader)

            for card in content:

                ck = card.keys()
                outdict = {"id" : str(id_count)}

                # get colour
                if tag in colours.keys():
                    colour = colours[tag]
                    outdict["colour"] = colour
                    outdict["brightness"] = "lighten-2"
                else:
                    break

                # now retrieve from the yaml file.
                if "title" in ck:
                    outdict["title"] = {"colour" : colour,
                                        "brightness" : "darken-4",
                                        "text" : card["title"]}
                    
                else:
                    break

                if "content" in ck:
                    outdict["content"] = {"colour" : "black",
                                          "brightness" : "darken-4",
                                          "text" : card["content"]}
                else:
                    break

                if "links" in ck:
                    if not isinstance(card["links"], list):
                        break
                    else:
                        listoflinks = []
                        for link in card["links"]:
                            if (isinstance(link, dict) and
                                "url" in link.keys() and
                                "text" in link.keys()):
                                listoflinks.append({"url" : link["url"],
                                                    "text" : link["text"]})
                        outdict["actions"] = {"colour" : colour,
                                              "brightness" : "darken-4",
                                              "urls" : copy.deepcopy(listoflinks)}
                else:
                    break

                if "tags" in ck:
                    if not isinstance(card["tags"], list):
                        break
                    else:
                        listoftags = []
                        for kw in card["tags"]:
                            if isinstance(kw, str):
                                listoftags.append(kw)
                        outdict["tags"] = copy.deepcopy(listoftags)
                else:
                    break

                out.append(copy.deepcopy(outdict))

                id_count += 1

with open(output_file, "w") as file:
    json.dump(out, file, indent = 2)
