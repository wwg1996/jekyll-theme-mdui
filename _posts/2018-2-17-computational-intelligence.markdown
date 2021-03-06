---
layout: post
title: 计算智能
date: 2018-02-17 22:02:50 +0800
categories: AI
tags:  计算智能
img: http://wangweiguang.xyz/images/CI.jpg
---

* 
{:toc}

# 计算智能概述
计算智能（Computational Intelligence，CI）是借鉴仿生学的思想，基于人们对生物体智能机理的认识，采用数值计算的方法去模拟和实现人类的智能。
## 什么是计算智能
计算智能(Computational Intelligence，CI) 目前还没有一个统一的形式化的定义，人们使用较多的是美国科学家贝兹德克(J.C：.Bezdek)从计算智能系统角度所给出的定义。贝慈德克认为，**如果一个系统仅处理低层的数值数据，含有模式识别部件，没有使用人工智能意义上的知识，且具有计算适应性、计算容错力、接近人的计算速度和近似于人的误差率这4个特性，则它是具有计算智能的。**

我们可以对计算智能作如下解释：**计算智能是借鉴仿生学的思想，基于对生物体的结构、进化、行为等机理的认识，以模型（计算模型、数学模型）为 基 础 ，以分布、并行、仿计算为特征去模拟生物体和人类的智能。**

## 计算智能的产生与发展
1992年，贝慈德克在《Approximate Reasoning》学报上首次 提出了“计算智能”的概念。

1994年6月底到7月初，IEEE在美国佛罗里达州的奥兰多市召开了首届国际计算智能大会(简称WCCI’94)。会议第一次将神经网络、进化计算和模糊系统这三个领域合并在一起，形成了“计算智能”这个统一的学科范畴。

在此之后，WCCI大会就成了IEEE的一个系列性学术会议，每4年举办一次。1998年5月，在美国阿拉斯加州的安克雷奇市又召开了第2届计算智能国际会议WCCI’98。2002年5月，在美国州夏威夷州首府火奴鲁鲁市又召开了第3届计算智能国际会议WCCI’02。此外，IEEE还出版了一些与计算智能有关的刊物。

目前，计算智能的发展得到了国内外众多的学术组织和研究机构的高度重视，并已成为智能科学技术一个重要的研究领域。
## 计算智能与人工智能的关系
# 计算智能研究领域
计算智能的三大基本领域包括神经计算、进化计算、模糊计算。**从学科范畴看，计算智能是在神经网络、进化计算及模糊系统这三个领域发展相对成熟的基础上形成的一个统一的学科概念。**其中，神经网络是一种对人类智能的结构模拟方法，它用人工神经网络系统去模拟生物神经系统的智能机理；进化计算是一种对人类智能的演化模拟方法，它用进化算法去模拟人类智能的进化规律；模糊计算是一种对人类智能的逻辑模拟方法，它用模糊逻辑去模拟人类的智能行为。

## 神经计算
神经计算也叫神经网络，是计算智能的重要基础和核心，也是计算智能一个重要研究领域 。其主要研究内容包括人工神经元的结构和模型、人工神经网络的互联结构和系统模型、基于神经网络的联结学习机制等。

![image](http://wangweiguang.xyz/images/ML.jpg)

[详细...](http://wangweiguang.xyz/ai/2018/02/17/neural-network.html)

## 进化计算
进化计算是一种模拟自然界生物进化过程与机制，进行问题求解的自组织、自适应的随机搜索技术。它以达尔文进化论的“物竟天择、适者生存”作为算法的进化规则，并结合孟德尔的遗传变异理论，将生物进化过程中的繁殖、变异、竞争和选择引入到了算法中，是一种对人类智能的演化模拟方法。进化计算有着遗传算法、进化策略、进化规划和遗传规划四大分支。其中，遗传算法是进化计算中最初形成的一种具有普遍影响的模拟进化优化算法。

![image](http://wangweiguang.xyz/images/EA.jpg)

[详细...](http://wangweiguang.xyz/ai/2018/02/17/evolutionary-computation.html)


## 模糊计算
**模糊计算**：亦称模糊系统，是通过对人类处理模糊现象的认知能力的认识，用模糊集合和模糊逻辑去模拟人类的智能行为的。模糊集合与模糊逻辑是美国加州大学扎德(Zadeh)教授1965年提出来的一种处理因模糊而引起的不确定性的有效方法。

**模糊概念的定义**：通常，人们把那种因没有严格边界划分而无法精确刻画的现象称为模糊现象，并把反映模糊现象的各种概念称为模糊概念。例如，“大”、“小”、“多”、“少”等。

**模糊概念的表示**：通常是用模糊集合来表示的，而模糊集合又是用隶属函数来刻画的。一个隶属函数描述一个模糊概念，其函数值为[0,1]区间的实数，用来描述函数自变量所代表的模糊事件隶属于该模糊概念的程度。

**模糊计算的争论**：一方面模糊逻辑存在一定缺陷；另一方面它在推理、控制、决策等方面得到了非常广泛的应用。



## 粗糙集
早在1904年，谓词逻辑的创始人G.Frege提出了“含糊（vague）”一词，并把它归类到边界上，即在全域上存在一个些体，它们既不在某个子集上，也不在该子集的补集上。

由于模糊集并没有给出对“含糊”这一概念的数学描述，即无法计算出具体的含糊元素数目。因此，模糊逻辑并未能真正解决“含糊”问题。
​    
1982年， Pawlak教授提出了粗糙集（Rough Set，简称RS）。RS不需要任何附加或额外条件，可以直接由数据构成的决策表进行推理，而不像概率那样需要前提假设，也不像模糊逻辑那样需要隶属函数。

RS理论的基础是先定义一种简单的等价关系，并利用等价关系将样本集合划分为等价类，然后再通过“下近似”和“上近似”引入关于概念（对象类）的不确定边界区域，最后定义了相应的粗糙集。

1991年，Z.Pawlak教授出版了第一本关于粗糙集理论及应用的专著。次年，第1届国际粗糙集会议在波兰召开。之后，国际粗糙集会议每年召开一次。目前，国际国内对粗糙集的研究十分活跃。 