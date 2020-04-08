var s = {
    "id": "absolute_codec_string",
    "url": "https://freeswitch.org/confluence/display/FREESWITCH/absolute_codec_string",
    "desc": "Sets the absolute codec string to use (nothing will be appended).",
    "type": "string",
    "usage": "<action application=\"set\" data=\"absolute_codec_string=PCMU,GSM\"/>\n<action application=\"bridge\" data=\"sofia/gateway/myprovider/5551231234\"/>"
}

if (!s.type) {
    s.type = ''
}

if (!s.usage) {
    s.usage = ''
}

if (!s.desc) {
    s.desc = ''
}

var template = `

# ${s.id}
- url: ${s.url}
- type: **${s.type}**

${s.desc}

\`\`\`
${s.usage}
\`\`\`

`

console.log(template)