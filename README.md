# Landing Page Jekyll theme

Jekyll theme based on [landing-page bootstrap theme ](http://startbootstrap.com/templates/landing-page/)

## How to use
 - Place a image in `/img/services/`
 - Create posts to display your services. Use the follow as an example:

```txt
---
layout: default
img: ipad.png
category: Services
title: The service title
---
The description of this service
```

## Demo
View this jekyll theme in action [here](https://swcool.github.io/landing-page-theme)

## Screenshot
![screenshot](https://raw.githubusercontent.com/swcool/landing-page-theme/master/img/screenshot.png)

===

For more Jekyll details, read [documentation](http://jekyllrb.com/).
This Jekyll theme used [Freelancer Jekyll theme](https://github.com/jeromelachaud/freelancer-theme/) as reference.

## License
The contents of this repository are licensed under the [Apache
2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

## Version
1.0.1

project install

install ruby
curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm -v
rvm install 2.6.0
rvm use 2.6.0

install jekyll
gem sources --remove https://rubygems.org/
gem sources -a http://rubygems.org/
gem install jekyll bundler
gem install jekyll -v 3.6.3
jekyll build --watch
bundle install --gemfile Gemfile
jekyll s