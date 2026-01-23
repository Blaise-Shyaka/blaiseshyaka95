---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
name: "{{ .File.ContentBaseName }}"
date: {{ .Date }}
tags: []
---
